const db = require('../db/pool');

/** @param {import('fastify').FastifyInstance} fastify */
async function utilisateursRoutes(fastify) {
    // Get all users
    fastify.get('/', async (request, reply) => {
        try {
            const result = await db.query('SELECT "UTL_ID", "UTL_LOGIN", "UTL_NOM", "UTL_PRENOM", "UTL_ROLE" FROM "UTILISATEUR" ORDER BY "UTL_ID" ASC');
            return result.rows;
        } catch (err) {
            reply.status(500).send({ error: 'Failed' });
        }
    });

    // Get single user
    fastify.get('/:id', async (request, reply) => {
        const { id } = request.params;
        try {
            const result = await db.query('SELECT * FROM "UTILISATEUR" WHERE "UTL_ID" = $1', [id]);
            if (result.rows.length === 0) return reply.status(404).send({ error: 'User not found' });
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Create new user
    fastify.post('/', async (request, reply) => {
        const { login, nom, prenom, email, tel, role, password } = request.body;
        if (!password) {
            return reply.status(400).send({ error: 'Password required' });
        }
        try {
            const result = await db.query(
                'INSERT INTO "UTILISATEUR" ("UTL_LOGIN", "UTL_NOM", "UTL_PRENOM", "UTL_EMAIL", "UTL_TEL", "UTL_ROLE", "UTL_PASSWORD") VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                [login, nom, prenom, email, tel, role || 1, password]
            );
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Update user
    fastify.put('/:id', async (request, reply) => {
        const { id } = request.params;
        const { login, nom, prenom, email, tel, role } = request.body;
        try {
            const result = await db.query(
                'UPDATE "UTILISATEUR" SET "UTL_LOGIN" = $1, "UTL_NOM" = $2, "UTL_PRENOM" = $3, "UTL_EMAIL" = $4, "UTL_TEL" = $5, "UTL_ROLE" = $6 WHERE "UTL_ID" = $7 RETURNING *',
                [login, nom, prenom, email, tel, role || 1, id]
            );
            if (result.rows.length === 0) return reply.status(404).send({ error: 'User not found' });
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Delete user
    fastify.delete('/:id', async (request, reply) => {
        const { id } = request.params;
        try {
            await db.query('DELETE FROM "UTILISATEUR" WHERE "UTL_ID" = $1', [id]);
            return { status: 'Success' };
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });
}

module.exports = utilisateursRoutes;
