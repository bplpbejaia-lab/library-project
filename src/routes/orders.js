const db = require('../db/pool');

async function ensureOrdersSchema() {
    await db.query(`
        ALTER TABLE "ORDERS"
        ADD COLUMN IF NOT EXISTS return_date TIMESTAMP,
        ADD COLUMN IF NOT EXISTS due_date TIMESTAMP,
        ADD COLUMN IF NOT EXISTS loan_days INTEGER,
        ADD COLUMN IF NOT EXISTS late_days INTEGER DEFAULT 0,
        ADD COLUMN IF NOT EXISTS penalty_rate INTEGER DEFAULT 0,
        ADD COLUMN IF NOT EXISTS penalty_amount INTEGER DEFAULT 0,
        ADD COLUMN IF NOT EXISTS penalty_applied_at TIMESTAMP
    `);
}

/** @param {import('fastify').FastifyInstance} fastify */
async function ordersRoutes(fastify, opts) {
    await ensureOrdersSchema();

    const { orderEvents } = opts;
    const emit = (type, data) => {
        if (orderEvents) orderEvents.emit('order_change', { type, data });
    };

    const fetchOrderWithContext = async (client, id) => {
        const result = await client.query(`
            SELECT
                o.*,
                l."LEC_NOM",
                l."LEC_PRENOM",
                l."LEC_PHOTO",
                l."LEC_FIN_PENALITE",
                l."CAT_ID",
                c."CAT_LIBELLE",
                COALESCE(c."CAT_PENALITE", 0) AS category_penalty_rate,
                COALESCE(c."CAT_PENALITE_PROP", 0) AS category_penalty_prop,
                COALESCE(r."REG_PRET", 14) AS policy_loan_days,
                n."DOC_TITRE_PROPRE"
            FROM "ORDERS" o
            LEFT JOIN "LECTEUR" l ON o."LEC_ID" = l."LEC_ID"
            LEFT JOIN "CATEGORIE" c ON l."CAT_ID" = c."CAT_ID"
            LEFT JOIN "REGLEMENT" r ON l."CAT_ID" = r."CAT_ID" AND r."TYP_ID" = 'a'
            LEFT JOIN "NOTICE" n ON o."DOC_ID" = n."DOC_ID"
            WHERE o.id = $1
        `, [id]);
        return result.rows[0];
    };

    // Fetch all orders
    fastify.get('/', async (request, reply) => {
        try {
            const result = await db.query(`
        SELECT
            o.*,
            l."LEC_NOM",
            l."LEC_PRENOM",
            l."LEC_PHOTO",
            l."LEC_FIN_PENALITE",
            l."CAT_ID",
            c."CAT_LIBELLE",
            COALESCE(c."CAT_PENALITE", 0) AS category_penalty_rate,
            COALESCE(c."CAT_PENALITE_PROP", 0) AS category_penalty_prop,
            COALESCE(r."REG_PRET", COALESCE(o.loan_days, 14)) AS allowed_loan_days,
            n."DOC_TITRE_PROPRE"
        FROM "ORDERS" o
        LEFT JOIN "LECTEUR" l ON o."LEC_ID" = l."LEC_ID"
        LEFT JOIN "CATEGORIE" c ON l."CAT_ID" = c."CAT_ID"
        LEFT JOIN "REGLEMENT" r ON l."CAT_ID" = r."CAT_ID" AND r."TYP_ID" = 'a'
        LEFT JOIN "NOTICE" n ON o."DOC_ID" = n."DOC_ID"
        ORDER BY o.order_date DESC
      `);
            return result.rows;
        } catch (err) {
            reply.status(500).send({ error: 'Failed to fetch orders: ' + err.message });
        }
    });

    // Take a new order
    fastify.post('/', async (request, reply) => {
        const { lec_id, doc_id } = request.body;
        try {
            const result = await db.query(
                'INSERT INTO "ORDERS" ("LEC_ID", "DOC_ID") VALUES ($1, $2) RETURNING *',
                [lec_id, doc_id]
            );
            const order = result.rows[0];
            await db.query('SELECT pg_notify($1, $2)', ['new_order', JSON.stringify(order)]);
            emit('new', order);
            return order;
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Approve/Confirm an order
    fastify.put('/:id/approve', async (request, reply) => {
        const { id } = request.params;
        const { exp_id: manual_exp_id } = request.body || {};
        const client = await db.connect();

        try {
            await client.query('BEGIN');

            // 1. Get order details
            const order = await fetchOrderWithContext(client, id);
            if (!order) throw new Error('Order not found');

            if (order.status !== 'PENDING') throw new Error('Order is already ' + order.status);
            if (order.LEC_FIN_PENALITE && new Date(order.LEC_FIN_PENALITE) > new Date()) {
                throw new Error('Ce lecteur est encore sous pénalité et ne peut pas emprunter');
            }

            let exp_id = manual_exp_id;

            // 2. Find an available exemplar if not provided
            if (!exp_id) {
                const expRes = await client.query(
                    'SELECT "EXP_ID" FROM "NOTICE_EXEMPLAIRE" WHERE "DOC_ID" = $1 AND "STA_EXP_ID" IN (1, 2, 3, 4) AND "LEC_ID" IS NULL LIMIT 1',
                    [order.DOC_ID]
                );

                if (expRes.rows.length === 0) {
                    throw new Error('Aucun exemplaire disponible pour ce livre');
                }
                exp_id = expRes.rows[0].EXP_ID;
            } else {
                // Verify the manual exp_id is available
                const expVerify = await client.query(
                    'SELECT * FROM "NOTICE_EXEMPLAIRE" WHERE "EXP_ID" = $1 AND "DOC_ID" = $2 AND "STA_EXP_ID" IN (1, 2, 3, 4) AND "LEC_ID" IS NULL',
                    [exp_id, order.DOC_ID]
                );
                if (expVerify.rows.length === 0) throw new Error('Cet exemplaire n\'est pas disponible');
            }

            // 3. Update the exemplar (Set LEC_ID and Date)
            await client.query(
                'UPDATE "NOTICE_EXEMPLAIRE" SET "LEC_ID" = $1, "EXP_DATE_PRET" = NOW() WHERE "EXP_ID" = $2',
                [order.LEC_ID, exp_id]
            );

            // 4. Update the book count in NOTICE table
            await client.query(
                'UPDATE "NOTICE" SET "DOC_NBR_EXEMPLAIRE" = GREATEST(0, COALESCE("DOC_NBR_EXEMPLAIRE", 1) - 1) WHERE "DOC_ID" = $1',
                [order.DOC_ID]
            );

            const loanDays = Number(order.policy_loan_days) || 14;

            // 5. Update the order
            const updatedOrder = await client.query(
                `UPDATE "ORDERS"
                 SET status = $1,
                     "EXP_ID" = $2,
                     loan_days = $3,
                     due_date = NOW() + ($3 || ' days')::interval,
                     return_date = NULL,
                     late_days = 0,
                     penalty_rate = 0,
                     penalty_amount = 0,
                     penalty_applied_at = NULL
                 WHERE id = $4
                 RETURNING *`,
                ['APPROVED', exp_id, loanDays, id]
            );

            await client.query('COMMIT');
            const resultOrder = updatedOrder.rows[0];
            emit('update', resultOrder);
            return resultOrder;

        } catch (err) {
            await client.query('ROLLBACK');
            reply.status(400).send({ error: err.message });
        } finally {
            client.release();
        }
    });

    // Reject order
    fastify.put('/:id/reject', async (request, reply) => {
        const { id } = request.params;
        try {
            const result = await db.query(
                'UPDATE "ORDERS" SET status = $1 WHERE id = $2 RETURNING *',
                ['REJECTED', id]
            );
            const orderResult = result.rows[0];
            emit('update', orderResult);
            return orderResult;
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Get available exemplars for a book
    fastify.get('/available-exemplars/:docId', async (request, reply) => {
        const { docId } = request.params;
        try {
            const result = await db.query(
                'SELECT "EXP_ID", "STA_EXP_ID" FROM "NOTICE_EXEMPLAIRE" WHERE "DOC_ID" = $1 AND "STA_EXP_ID" IN (1, 2, 3, 4) AND "LEC_ID" IS NULL',
                [docId]
            );
            return result.rows;
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Return a book (reverse of approve)
    fastify.put('/:id/return', async (request, reply) => {
        const { id } = request.params;
        const client = await db.connect();
        try {
            await client.query('BEGIN');

            // 1. Get order
            const order = await fetchOrderWithContext(client, id);
            if (!order) throw new Error('Order not found');
            if (order.status !== 'APPROVED') throw new Error('Order is not currently approved');

            // 2. Release exam exemplar
            if (order.EXP_ID) {
                await client.query(
                    'UPDATE "NOTICE_EXEMPLAIRE" SET "LEC_ID" = NULL, "EXP_DATE_PRET" = NULL WHERE "EXP_ID" = $1',
                    [order.EXP_ID]
                );
            }

            // 3. Increment book count back
            await client.query(
                'UPDATE "NOTICE" SET "DOC_NBR_EXEMPLAIRE" = COALESCE("DOC_NBR_EXEMPLAIRE", 0) + 1 WHERE "DOC_ID" = $1',
                [order.DOC_ID]
            );

            const { manual_penalty_days } = request.body || {};

            const loanDays = Number(order.policy_loan_days || order.loan_days) || 14;
            const penaltyRate = Number(order.category_penalty_rate) || 0;
            const penaltyProp = Number(order.category_penalty_prop) || 0;
            const dueDate = order.due_date || new Date(Date.parse(order.order_date) + loanDays * 86400000);
            const lateDaysResult = await client.query(
                'SELECT GREATEST(0, CURRENT_DATE - $1::date) AS late_days',
                [dueDate]
            );
            const lateDays = Number(lateDaysResult.rows[0].late_days) || 0;
            const penaltyAmount = lateDays * penaltyRate;
            
            let suspensionDays;
            if (manual_penalty_days !== undefined) {
                suspensionDays = Number(manual_penalty_days);
            } else {
                suspensionDays = lateDays * penaltyProp;
            }

            if (suspensionDays > 0) {
                await client.query(
                    `UPDATE "LECTEUR"
                     SET "LEC_FIN_PENALITE" = GREATEST(COALESCE("LEC_FIN_PENALITE", NOW()), NOW()) + ($2 || ' days')::interval
                     WHERE "LEC_ID" = $1`,
                    [order.LEC_ID, suspensionDays]
                );
            }

            // 4. Update order status and penalty details
            const updatedOrder = await client.query(
                `UPDATE "ORDERS"
                 SET status = $1,
                     return_date = NOW(),
                     loan_days = COALESCE(loan_days, $2),
                     due_date = COALESCE(due_date, order_date + ($2 || ' days')::interval),
                     late_days = $3,
                     penalty_rate = $4,
                     penalty_amount = $5,
                     penalty_applied_at = CASE WHEN $5 > 0 THEN NOW() ELSE penalty_applied_at END
                 WHERE id = $6
                 RETURNING *`,
                ['RETURNED', loanDays, lateDays, penaltyRate, penaltyAmount, id]
            );

            await client.query('COMMIT');
            const resultOrder = updatedOrder.rows[0];
            emit('update', resultOrder);
            return resultOrder;
        } catch (err) {
            await client.query('ROLLBACK');
            reply.status(400).send({ error: err.message });
        } finally {
            client.release();
        }
    });

    // Delete/Remove order entry
    fastify.delete('/:id', async (request, reply) => {
        const { id } = request.params;
        try {
            await db.query('DELETE FROM "ORDERS" WHERE id = $1', [id]);
            return { status: 'Success' };
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });
}

module.exports = ordersRoutes;
