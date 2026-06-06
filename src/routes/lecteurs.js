const db = require('../db/pool');
const path = require('path');
const fs = require('fs');

let lecteurColumnsCache = null;
let registrationColumnsCache = null;

async function getTableColumns(tableName) {
    const result = await db.query(
        `SELECT column_name FROM information_schema.columns WHERE table_name = $1`,
        [tableName]
    );
    return new Set(result.rows.map(row => row.column_name));
}

async function getLecteurColumns() {
    if (!lecteurColumnsCache) lecteurColumnsCache = await getTableColumns('LECTEUR');
    return lecteurColumnsCache;
}

async function getRegistrationColumns() {
    if (!registrationColumnsCache) registrationColumnsCache = await getTableColumns('registrations');
    return registrationColumnsCache;
}

async function ensureReaderDocumentColumns() {
    await db.query(`
        ALTER TABLE "LECTEUR"
        ADD COLUMN IF NOT EXISTS "LEC_DOC_ENGAGEMENT" TEXT,
        ADD COLUMN IF NOT EXISTS "LEC_DOC_INSCRIPTION" TEXT,
        ADD COLUMN IF NOT EXISTS "LEC_DOC_IDENTITE" TEXT
    `);
    lecteurColumnsCache = null;
}

async function buildReaderRegistrationJoin() {
    const regCols = await getRegistrationColumns();
    const joinConditions = [];
    const selectParts = [];

    if (regCols.has('lec_id')) joinConditions.push(`r.lec_id::text = l."LEC_ID"::text`);
    if (regCols.has('email')) joinConditions.push(`LOWER(r.email) = LOWER(l."LEC_EMAIL")`);
    if (regCols.has('nin')) joinConditions.push(`r.nin = l."LEC_NIN"`);
    if (regCols.has('nom') && regCols.has('prenom')) {
        joinConditions.push(`(r.nom = l."LEC_NOM" AND r.prenom = l."LEC_PRENOM")`);
    }

    const where = joinConditions.length ? joinConditions.join(' OR ') : 'FALSE';
    const statusFilter = regCols.has('status') ? `r.status = 'APPROVED' AND ` : '';
    const order = regCols.has('registration_date') ? 'r.registration_date DESC NULLS LAST,' : '';
    const fallbackOrder = regCols.has('id') ? 'r.id DESC NULLS LAST' : '1';

    selectParts.push(regCols.has('inscription_source')
        ? `COALESCE(r.inscription_source, 'EXTERNE') AS inscription_source`
        : `'EXTERNE' AS inscription_source`);

    for (const col of ['id_card_recto_path', 'id_card_verso_path', 'nom', 'prenom', 'email', 'telephone', 'nin']) {
        selectParts.push(regCols.has(col)
            ? `r.${col} AS registration_${col}`
            : `NULL AS registration_${col}`);
    }

    return {
        select: selectParts.join(',\n                       '),
        join: `
                LEFT JOIN LATERAL (
                    SELECT r.*
                    FROM "registrations" r
                    WHERE ${statusFilter}(${where})
                    ORDER BY ${order} ${fallbackOrder}
                    LIMIT 1
                ) r ON TRUE`
    };
}

/** @param {import('fastify').FastifyInstance} fastify */
async function lecteursRoutes(fastify) {
    try {
        await ensureReaderDocumentColumns();
    } catch (err) {
        fastify.log.warn({ err }, 'Could not ensure reader document columns');
    }

    // Get readers stats
    fastify.get('/stats', async (request, reply) => {
        try {
            const result = await db.query('SELECT COUNT(*) as total FROM "LECTEUR" WHERE "LEC_STATUT" = 1');
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: 'Failed to fetch stats' });
        }
    });

    // Get readers (paginated + date filter)
    fastify.get('/', async (request, reply) => {
        try {
            const limit = Math.min(parseInt(request.query.limit) || 20, 100);
            const offset = parseInt(request.query.offset) || 0;
            const period = request.query.period || ''; // today, week, month

            let dateFilter = '';
            if (period === 'today') {
                dateFilter = `AND l."CREATE_DATE" >= CURRENT_DATE`;
            } else if (period === 'week') {
                dateFilter = `AND l."CREATE_DATE" >= CURRENT_DATE - INTERVAL '7 days'`;
            } else if (period === 'month') {
                dateFilter = `AND l."CREATE_DATE" >= CURRENT_DATE - INTERVAL '30 days'`;
            }

            const countRes = await db.query(`
                SELECT COUNT(*) as total FROM "LECTEUR" l WHERE "LEC_STATUT" = 1 ${dateFilter}
            `);

            const regJoin = await buildReaderRegistrationJoin();

            // Use l.* to avoid referencing columns that may not exist in all schemas
            const result = await db.query(`
                SELECT l.*, ${regJoin.select}
                FROM "LECTEUR" l
                ${regJoin.join}
                WHERE l."LEC_STATUT" = 1 ${dateFilter}
                ORDER BY l."CREATE_DATE" DESC NULLS LAST, l."LEC_ID" DESC
                LIMIT $1 OFFSET $2
            `, [limit, offset]);

            return { rows: result.rows, total: Number(countRes.rows[0].total), offset, limit };
        } catch (err) {
            reply.status(500).send({ error: 'Failed to fetch readers: ' + err.message });
        }
    });

    // Get single reader (all fields)
    fastify.get('/:id', async (request, reply) => {
        const { id } = request.params;
        try {
            const regJoin = await buildReaderRegistrationJoin();
            const result = await db.query(`
                SELECT l.*, ${regJoin.select}
                FROM "LECTEUR" l
                ${regJoin.join}
                WHERE l."LEC_ID" = $1
            `, [id]);
            if (result.rows.length === 0) return reply.status(404).send({ error: 'Reader not found' });
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Get loan history for a reader
    fastify.get('/:id/loans', async (request, reply) => {
        const { id } = request.params;
        try {
            const result = await db.query(`
                SELECT o.*, n."DOC_TITRE_PROPRE"
                FROM "ORDERS" o
                LEFT JOIN "NOTICE" n ON o."DOC_ID" = n."DOC_ID"
                WHERE o."LEC_ID" = $1
                ORDER BY o.order_date DESC
            `, [id]);
            return result.rows;
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Create new reader
    fastify.post('/', async (request, reply) => {
        const { id, nom, prenom, email, tel, nin, cat_id, date_naiss, adresse } = request.body;
        try {
            const result = await db.query(
                `INSERT INTO "LECTEUR" ("LEC_ID", "LEC_NOM", "LEC_PRENOM", "LEC_EMAIL", "LEC_TEL",
                 "LEC_NIN", "CAT_ID", "LEC_DATE_NAISSANCE", "LEC_ADRESSE", "LEC_DATE_ADHESION", "LEC_STATUT")
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), 0) RETURNING *`,
                [id, nom, prenom, email, tel, nin || null, cat_id || null, date_naiss || null, adresse || null]
            );
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Update reader
    fastify.put('/:id', async (request, reply) => {
        const { id: oldId } = request.params;
        const { id: newId, nom, prenom, email, tel, nin, cat_id, date_naiss, adresse, profession, rfid } = request.body;
        try {
            const result = await db.query(
                `UPDATE "LECTEUR" SET "LEC_ID" = $1, "LEC_NOM" = $2, "LEC_PRENOM" = $3,
                 "LEC_EMAIL" = $4, "LEC_TEL" = $5, "LEC_NIN" = $6, "CAT_ID" = $7,
                 "LEC_DATE_NAISSANCE" = $8, "LEC_ADRESSE" = $9, "LEC_PROFESSION" = $10,
                 "LEC_RFID" = $11
                 WHERE "LEC_ID" = $12 RETURNING *`,
                [newId || oldId, nom, prenom, email, tel, nin || null, cat_id || null, date_naiss || null, adresse || null, profession || null, rfid || null, oldId]
            );
            if (result.rows.length === 0) return reply.status(404).send({ error: 'Reader not found' });
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Validate reader (set status to 1)
    fastify.put('/:id/validate', async (request, reply) => {
        const { id } = request.params;
        try {
            const result = await db.query('UPDATE "LECTEUR" SET "LEC_STATUT" = 1 WHERE "LEC_ID" = $1 RETURNING *', [id]);
            if (result.rows.length === 0) return reply.status(404).send({ error: 'Reader not found' });
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Bulk delete readers
    fastify.post('/bulk-delete', async (request, reply) => {
        const { ids } = request.body || {};
        if (!Array.isArray(ids) || ids.length === 0) {
            return reply.status(400).send({ error: 'No IDs provided' });
        }

        const cleanIds = ids.map(id => String(id || '').trim()).filter(Boolean);
        if (!cleanIds.length) {
            return reply.status(400).send({ error: 'No valid IDs provided' });
        }

        try {
            const result = await db.query(
                'DELETE FROM "LECTEUR" WHERE "LEC_ID" = ANY($1::text[]) RETURNING "LEC_ID"',
                [cleanIds]
            );
            return { deletedCount: result.rows.length, deletedIds: result.rows.map(row => row.LEC_ID) };
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Delete reader
    fastify.delete('/:id', async (request, reply) => {
        const { id } = request.params;
        try {
            await db.query('DELETE FROM "LECTEUR" WHERE "LEC_ID" = $1', [id]);
            return { status: 'Success' };
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Full update with all fields including documents
    fastify.put('/:id/full-update', async (request, reply) => {
        const { id } = request.params;
        const { 
            nom, prenom, nomAr, prenomAr, email, tel, nin, cat_id, date_naiss, adresse, rfid, date_expiration, password,
            genre, lieu_naiss, nationalite, profession, ville, code_postal, whatsapp,
            photo, cni_front, cni_back, statut,
            doc_engagement, doc_inscription, doc_identite
        } = request.body;

        try {
            const existing = await db.query('SELECT * FROM "LECTEUR" WHERE "LEC_ID" = $1', [id]);
            if (existing.rows.length === 0) return reply.status(404).send({ error: 'Reader not found' });

            const lecteurColumns = await getLecteurColumns();
            const updates = [];
            const values = [];
            let idx = 1;

            const fields = {
                "LEC_NOM": nom, "LEC_PRENOM": prenom, 
                "LEC_NOM_AR": nomAr, "LEC_PRENOM_AR": prenomAr,
                "LEC_EMAIL": email, "LEC_TEL": tel, 
                "LEC_NIN": nin, "CAT_ID": cat_id, "LEC_DATE_NAISSANCE": date_naiss, 
                "LEC_ADRESSE": adresse, "LEC_RFID": rfid, "LEC_DATE_EXPIRATION": date_expiration,
                "LEC_GENRE": genre, "LEC_LIEU_NAISSANCE": lieu_naiss, "LEC_NATIONALITE": nationalite,
                "LEC_PROFESSION": profession, "LEC_VILLE": ville, "LEC_CODE_POSTAL": code_postal,
                "LEC_WHATSAPP": whatsapp, "LEC_STATUT": statut,
                "LEC_DOC_ENGAGEMENT": doc_engagement,
                "LEC_DOC_INSCRIPTION": doc_inscription,
                "LEC_DOC_IDENTITE": doc_identite
            };

            for (const [col, val] of Object.entries(fields)) {
                if (val !== undefined && lecteurColumns.has(col)) {
                    updates.push(`"${col}" = $${idx++}`);
                    values.push(val || null);
                }
            }

            // Handle image uploads (base64)
            const uploadDir = path.join(__dirname, '../../uploads');
            if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

            const handleImage = (base64, suffix) => {
                if (!base64 || !base64.startsWith('data:image')) return null;
                const extension = base64.split(';')[0].split('/')[1];
                const filename = `reader_${id}_${suffix}_${Date.now()}.${extension}`;
                const base64Data = base64.replace(/^data:image\/\w+;base64,/, "");
                fs.writeFileSync(path.join(uploadDir, filename), base64Data, 'base64');
                return `/uploads/${filename}`;
            };

            const photoUrl = handleImage(photo, 'photo');
            if (photoUrl && lecteurColumns.has('LEC_PHOTO')) { updates.push(`"LEC_PHOTO" = $${idx++}`); values.push(photoUrl); }

            const cniFrontUrl = handleImage(cni_front, 'cni_front');
            if (cniFrontUrl && lecteurColumns.has('LEC_CNI_FRONT')) { updates.push(`"LEC_CNI_FRONT" = $${idx++}`); values.push(cniFrontUrl); }

            const cniBackUrl = handleImage(cni_back, 'cni_back');
            if (cniBackUrl && lecteurColumns.has('LEC_CNI_BACK')) { updates.push(`"LEC_CNI_BACK" = $${idx++}`); values.push(cniBackUrl); }

            // Handle password update
            if (password && lecteurColumns.has('LEC_PASSWORD')) {
                const crypto = require('crypto');
                const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
                updates.push(`"LEC_PASSWORD" = $${idx++}`);
                values.push(hashedPassword);
            }

            if (updates.length === 0) return reply.status(400).send({ error: 'No fields to update' });

            values.push(id);
            const result = await db.query(
                `UPDATE "LECTEUR" SET ${updates.join(', ')} WHERE "LEC_ID" = $${idx} RETURNING *`,
                values
            );

            if (result.rows.length === 0) return reply.status(404).send({ error: 'Reader not found' });
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });
    // Bulk renew readers
    fastify.post('/bulk-renew', async (request, reply) => {
        const { ids } = request.body;
        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return reply.status(400).send({ error: 'No IDs provided' });
        }
        try {
            const result = await db.query(
                `UPDATE "LECTEUR" 
                 SET "LEC_DATE_EXPIRATION" = (CASE 
                    WHEN "LEC_DATE_EXPIRATION" > NOW() THEN "LEC_DATE_EXPIRATION" 
                    ELSE NOW() 
                 END) + INTERVAL '1 year'
                 WHERE "LEC_ID" = ANY($1) 
                 RETURNING "LEC_ID"`,
                [ids]
            );
            return { updatedCount: result.rows.length };
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Renew single reader (1 year)
    fastify.post('/:id/renew', async (request, reply) => {
        const { id } = request.params;
        try {
            const result = await db.query(
                `UPDATE "LECTEUR" 
                 SET "LEC_DATE_EXPIRATION" = (CASE 
                    WHEN "LEC_DATE_EXPIRATION" > NOW() THEN "LEC_DATE_EXPIRATION" 
                    ELSE NOW() 
                 END) + INTERVAL '1 year'
                 WHERE "LEC_ID" = $1 
                 RETURNING *`,
                [id]
            );
            if (result.rows.length === 0) return reply.status(404).send({ error: 'Reader not found' });
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Apply manual penalty to a single reader (suspension days)
    fastify.post('/:id/penalize', async (request, reply) => {
        const { id } = request.params;
        const { penalty_days } = request.body || {};
        const days = parseInt(penalty_days, 10);
        if (isNaN(days) || days < 0) {
            return reply.status(400).send({ error: 'Invalid penalty days' });
        }
        try {
            const result = await db.query(
                `UPDATE "LECTEUR" 
                 SET "LEC_FIN_PENALITE" = GREATEST(COALESCE("LEC_FIN_PENALITE", NOW()), NOW()) + ($2 || ' days')::interval
                 WHERE "LEC_ID" = $1 
                 RETURNING *`,
                [id, days]
            );
            if (result.rows.length === 0) return reply.status(404).send({ error: 'Reader not found' });
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });
}

module.exports = lecteursRoutes;
