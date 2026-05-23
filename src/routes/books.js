const db = require('../db/pool');

/** @param {import('fastify').FastifyInstance} fastify */
async function booksRoutes(fastify) {
    // Classification/domain summary
    fastify.get('/classifications/summary', async (request, reply) => {
        try {
            const result = await db.query(`
                WITH classification_tree AS (
                    SELECT
                        c."CLA_ID",
                        c."CLA_LIBELLE",
                        CASE
                            WHEN RIGHT(c."CLA_ID", 2) = '00' THEN c."CLA_ID"
                            ELSE LEFT(c."CLA_ID", 1) || '00'
                        END AS domain_id
                    FROM "CLASSIFICATION" c
                ),
                notice_counts AS (
                    SELECT nc."CLA_ID", COUNT(*)::int AS books_count
                    FROM "NOTICE_CLASSIFICATION" nc
                    GROUP BY nc."CLA_ID"
                )
                SELECT
                    d."CLA_ID" AS domain_id,
                    d."CLA_LIBELLE" AS domain_label,
                    COUNT(*) FILTER (WHERE ct."CLA_ID" <> d."CLA_ID")::int AS subdomain_count,
                    COALESCE(SUM(nc.books_count), 0)::int AS books_count
                FROM "CLASSIFICATION" d
                JOIN classification_tree ct ON ct.domain_id = d."CLA_ID"
                LEFT JOIN notice_counts nc ON nc."CLA_ID" = ct."CLA_ID"
                WHERE RIGHT(d."CLA_ID", 2) = '00'
                GROUP BY d."CLA_ID", d."CLA_LIBELLE"
                ORDER BY d."CLA_ID"
            `);
            return result.rows;
        } catch (err) {
            reply.status(500).send({ error: 'Failed to fetch classifications summary: ' + err.message });
        }
    });

    // Get classifications for a single book
    fastify.get('/:id/classifications', async (request, reply) => {
        const { id } = request.params;
        try {
            const result = await db.query(`
                SELECT
                    nc."CLA_ID" AS classification_id,
                    c."CLA_LIBELLE" AS classification_label,
                    CASE
                        WHEN RIGHT(c."CLA_ID", 2) = '00' THEN c."CLA_ID"
                        ELSE LEFT(c."CLA_ID", 1) || '00'
                    END AS domain_id,
                    d."CLA_LIBELLE" AS domain_label
                FROM "NOTICE_CLASSIFICATION" nc
                JOIN "CLASSIFICATION" c ON nc."CLA_ID" = c."CLA_ID"
                LEFT JOIN "CLASSIFICATION" d
                    ON d."CLA_ID" = CASE
                        WHEN RIGHT(c."CLA_ID", 2) = '00' THEN c."CLA_ID"
                        ELSE LEFT(c."CLA_ID", 1) || '00'
                    END
                WHERE nc."DOC_ID" = $1
                ORDER BY nc."CLA_ID"
            `, [id]);
            return result.rows;
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Get books stats
    fastify.get('/stats', async (request, reply) => {
        try {
            const result = await db.query(`
                SELECT 
                    COUNT(*) as total,
                    SUM("DOC_NBR_EXEMPLAIRE") as copies,
                    COUNT("DOC_ISBN") as isbn,
                    COUNT(CASE WHEN "DOC_ANNEE" >= '2020' THEN 1 END) as recent
                FROM "NOTICE"
            `);
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: 'Failed to fetch stats' });
        }
    });

    // Get all books
    fastify.get('/', async (request, reply) => {
        try {
            const result = await db.query(`
                SELECT "DOC_ID", "DOC_TITRE_PROPRE", "DOC_ISBN", "DOC_ANNEE", "DOC_NBR_EXEMPLAIRE", "DOC_AUTEUR", "DOC_COTE", "DOC_LANGUE"
                FROM "NOTICE" ORDER BY "DOC_ID" DESC LIMIT 500
            `);
            return result.rows;
        } catch (err) {
            reply.status(500).send({ error: 'Failed to fetch books: ' + err.message });
        }
    });

    // Get single book (all fields)
    fastify.get('/:id', async (request, reply) => {
        const { id } = request.params;
        try {
            const result = await db.query(`
                SELECT *
                FROM "NOTICE"
                WHERE "DOC_ID" = $1
            `, [id]);
            if (result.rows.length === 0) return reply.status(404).send({ error: 'Book not found' });
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Get exemplars for a book
    fastify.get('/:id/exemplars', async (request, reply) => {
        const { id } = request.params;
        try {
            const result = await db.query(
                'SELECT "EXP_ID", "STA_EXP_ID", "LEC_ID", "EXP_DATE_PRET" FROM "NOTICE_EXEMPLAIRE" WHERE "DOC_ID" = $1 ORDER BY "EXP_ID"',
                [id]
            );
            return result.rows;
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Create new book entry
    fastify.post('/', async (request, reply) => {
        const { title, isbn, year } = request.body;
        try {
            const result = await db.query(
                `INSERT INTO "NOTICE" ("DOC_TITRE_PROPRE", "DOC_ISBN", "DOC_ANNEE")
                 VALUES ($1, $2, $3) RETURNING *`,
                [title, isbn, year]
            );
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Update book entry
    fastify.put('/:id', async (request, reply) => {
        const { id } = request.params;
        const { title, isbn, year } = request.body;
        try {
            const result = await db.query(
                `UPDATE "NOTICE" SET "DOC_TITRE_PROPRE" = $1, "DOC_ISBN" = $2, "DOC_ANNEE" = $3
                 WHERE "DOC_ID" = $4 RETURNING *`,
                [title, isbn, year, id]
            );
            if (result.rows.length === 0) return reply.status(404).send({ error: 'Book not found' });
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Delete book entry
    fastify.delete('/:id', async (request, reply) => {
        const { id } = request.params;
        try {
            await db.query('DELETE FROM "NOTICE" WHERE "DOC_ID" = $1', [id]);
            return { status: 'Success' };
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });
}

module.exports = booksRoutes;
