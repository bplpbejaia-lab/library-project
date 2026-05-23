const db = require('../db/pool');

/** @param {import('fastify').FastifyInstance} fastify */
async function accessRoutes(fastify) {
    const lastScans = new Map(); // For 10s debounce: { rfid: timestamp }

    // Search readers for suggestions
    fastify.get('/search-readers', async (request, reply) => {
        const { query } = request.query;
        if (!query || query.length < 2) return [];
        try {
            const res = await db.query(
                `SELECT "LEC_NOM", "LEC_PRENOM", "LEC_ID", "LEC_RFID", "LEC_PHOTO", "LEC_STATUT"
                 FROM "LECTEUR" 
                 WHERE ("LEC_NOM" ILIKE $1 OR "LEC_PRENOM" ILIKE $1 OR "LEC_RFID" ILIKE $1 OR "LEC_ID"::text ILIKE $1)
                 LIMIT 5`,
                [`%${query}%`]
            );
            return res.rows;
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Scan RFID card
    fastify.post('/scan', async (request, reply) => {
        const { rfid } = request.body;
        if (!rfid) return reply.status(400).send({ error: 'RFID required' });

        const now = Date.now();
        const lastScanTime = lastScans.get(rfid) || 0;

        // Debounce: ignore if same card scanned within 10 seconds
        if (now - lastScanTime < 10000) {
            return reply.send({ status: 'ignored', message: 'Double scan ignoré' });
        }
        lastScans.set(rfid, now);

        try {
            // Find reader by RFID or ID or Name or Birth Date
            let res = await db.query('SELECT * FROM "LECTEUR" WHERE "LEC_RFID" = $1 OR "LEC_ID"::text = $1', [rfid]);
            let reader = res.rows[0];

            if (!reader) {
                // Try searching by Nom or Birth Date if RFID/ID search failed (Manual entry)
                if (rfid.includes('/')) {
                    const [d, m, y] = rfid.split('/');
                    if (d && m && y) {
                        const dateStr = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
                        res = await db.query('SELECT * FROM "LECTEUR" WHERE "LEC_DATE_NAISSANCE"::text LIKE $1', [`${dateStr}%`]);
                    }
                } else {
                    res = await db.query('SELECT * FROM "LECTEUR" WHERE "LEC_NOM" ILIKE $1 OR "LEC_PRENOM" ILIKE $1', [`%${rfid}%`]);
                }
                reader = res.rows[0];
            }

            if (!reader) {
                await logAccess(null, rfid, 'DECLINED', 'Individu non trouvé');
                broadcastEvent('DECLINED', { rfid, reason: 'Individu non trouvé' });
                return reply.status(404).send({ error: 'Lecteur non trouvé' });
            }

            // Check if validated and not expired
            const isExpired = reader.LEC_DATE_EXPIRATION && new Date(reader.LEC_DATE_EXPIRATION) < new Date();
            if (parseInt(reader.LEC_STATUT) !== 1) {
                await logAccess(reader.LEC_ID, rfid, 'DECLINED', 'Compte non validé');
                broadcastEvent('DECLINED', { reader, reason: 'Compte non validé' });
                return reply.status(403).send({ error: 'Compte non validé' });
            }
            if (isExpired) {
                await logAccess(reader.LEC_ID, rfid, 'DECLINED', 'Carte expirée');
                broadcastEvent('DECLINED', { reader, reason: 'Carte expirée' });
                return reply.status(403).send({ error: 'Carte expirée' });
            }

            // Check if user is penalized (suspended)
            const isPenalized = reader.LEC_FIN_PENALITE && new Date(reader.LEC_FIN_PENALITE) > new Date();
            if (isPenalized) {
                const formattedDate = new Date(reader.LEC_FIN_PENALITE).toLocaleDateString('fr-FR');
                await logAccess(reader.LEC_ID, rfid, 'DECLINED', `Lecteur sous pénalité jusqu'au ${formattedDate}`);
                broadcastEvent('DECLINED', { reader, reason: `Sous pénalité jusqu'au ${formattedDate}` });
                return reply.status(403).send({ error: `Lecteur sous pénalité jusqu'au ${formattedDate}` });
            }

            // Toggle state
            const newState = reader.LEC_ACCESS_STATE === 'IN' ? 'OUT' : 'IN';
            await db.query('UPDATE "LECTEUR" SET "LEC_ACCESS_STATE" = $1 WHERE "LEC_ID" = $2', [newState, reader.LEC_ID]);
            
            await logAccess(reader.LEC_ID, rfid, newState, null);
            broadcastEvent(newState, { reader });

            return { status: 'success', state: newState, reader };
        } catch (err) {
            console.error(err);
            reply.status(500).send({ error: err.message });
        }
    });

    // Get logs with filters
    fastify.get('/logs', async (request, reply) => {
        const { query, date, action, detailed } = request.query;
        try {
            let sql = `
                SELECT a.*, l."LEC_NOM", l."LEC_PRENOM", l."LEC_PHOTO"
                FROM "ACCESS_LOGS" a
                LEFT JOIN "LECTEUR" l ON a."LEC_ID" = l."LEC_ID"
                WHERE 1=1
            `;
            const params = [];

            if (date) {
                params.push(date);
                sql += ` AND a."SCAN_DATE"::date = $${params.length}`;
            } else if (!detailed) {
                // Default to today if not detailed view or specific date
                sql += ` AND a."SCAN_DATE" >= CURRENT_DATE`;
            }

            if (action) {
                params.push(action);
                sql += ` AND a."ACTION" = $${params.length}`;
            }

            if (query) {
                params.push(`%${query}%`);
                sql += ` AND (l."LEC_NOM" ILIKE $${params.length} OR l."LEC_PRENOM" ILIKE $${params.length} OR a."RFID_CODE" ILIKE $${params.length} OR a."LEC_ID"::text ILIKE $${params.length})`;
            }

            sql += ` ORDER BY a."SCAN_DATE" DESC LIMIT 500`;
            
            const result = await db.query(sql, params);
            return result.rows;
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Get today's stats
    fastify.get('/stats', async (request, reply) => {
        try {
            const totalRes = await db.query('SELECT COUNT(*) FROM "ACCESS_LOGS" WHERE "SCAN_DATE" >= CURRENT_DATE');
            const inRes = await db.query('SELECT COUNT(*) FROM "LECTEUR" WHERE "LEC_ACCESS_STATE" = \'IN\'');
            const declinedRes = await db.query('SELECT COUNT(*) FROM "ACCESS_LOGS" WHERE "SCAN_DATE" >= CURRENT_DATE AND "ACTION" = \'DECLINED\'');
            
            // New: Gender-based stats for people currently IN
            const maleInRes = await db.query('SELECT COUNT(*) FROM "LECTEUR" WHERE "LEC_ACCESS_STATE" = \'IN\' AND ("LEC_GENRE" = \'M\' OR "LEC_GENRE" ILIKE \'masculin%\')');
            const femaleInRes = await db.query('SELECT COUNT(*) FROM "LECTEUR" WHERE "LEC_ACCESS_STATE" = \'IN\' AND ("LEC_GENRE" = \'F\' OR "LEC_GENRE" ILIKE \'fém%\' OR "LEC_GENRE" ILIKE \'fem%\')');

            const totalInRes = await db.query('SELECT COUNT(*) FROM "ACCESS_LOGS" WHERE "SCAN_DATE" >= CURRENT_DATE AND "ACTION" = \'IN\'');
            const totalOutRes = await db.query('SELECT COUNT(*) FROM "ACCESS_LOGS" WHERE "SCAN_DATE" >= CURRENT_DATE AND "ACTION" = \'OUT\'');

            return {
                total: parseInt(totalRes.rows[0].count),
                in_count: parseInt(inRes.rows[0].count),
                declined_count: parseInt(declinedRes.rows[0].count),
                male_in: parseInt(maleInRes.rows[0].count),
                female_in: parseInt(femaleInRes.rows[0].count),
                total_in: parseInt(totalInRes.rows[0].count),
                total_out: parseInt(totalOutRes.rows[0].count)
            };
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Reset exclusions
    fastify.get('/exclusions', async (request, reply) => {
        const res = await db.query('SELECT "LEC_ID" FROM "ACCESS_RESET_EXCLUSIONS"');
        return res.rows.map(r => r.LEC_ID);
    });

    fastify.post('/exclusions', async (request, reply) => {
        const { lecId } = request.body;
        await db.query('INSERT INTO "ACCESS_RESET_EXCLUSIONS" ("LEC_ID") VALUES ($1) ON CONFLICT DO NOTHING', [lecId]);
        return { status: 'success' };
    });

    fastify.delete('/exclusions/:id', async (request, reply) => {
        await db.query('DELETE FROM "ACCESS_RESET_EXCLUSIONS" WHERE "LEC_ID" = $1', [request.params.id]);
        return { status: 'success' };
    });

    // Helper to log in DB
    async function logAccess(lecId, rfid, action, reason) {
        await db.query(
            `INSERT INTO "ACCESS_LOGS" ("LEC_ID", "RFID_CODE", "ACTION", "REASON") VALUES ($1, $2, $3, $4)`,
            [lecId, rfid, action, reason]
        );
    }

    // Helper to broadcast to SSE
    function broadcastEvent(type, data) {
        fastify.orderEvents.emit('access_change', { type, data, timestamp: new Date() });
    }
}

module.exports = accessRoutes;
