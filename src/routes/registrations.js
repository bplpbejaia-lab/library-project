const db = require('../db/pool');
const path = require('path');
const fs = require('fs');
const util = require('util');
const pipeline = util.promisify(require('stream').pipeline);

const UPLOAD_DIR = path.join(__dirname, '../../uploads/id_cards');

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

/** @param {import('fastify').FastifyInstance} fastify */
async function registrationsRoutes(fastify) {
    // Get all registrations from registrations table only
    fastify.get('/', async (request, reply) => {
        try {
            const result = await db.query(`
                SELECT 
                    CAST(id AS TEXT) as id,
                    nom,
                    prenom,
                    email,
                    telephone,
                    nin,
                    cat_id,
                    date_naiss,
                    adresse,
                    inscription_source,
                    id_card_recto_path,
                    id_card_verso_path,
                    status,
                    registration_date,
                    rfid_code
                FROM "registrations"
                ORDER BY registration_date DESC
            `);
            return result.rows;
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Helper: save an uploaded file
    async function saveUploadedFile(field) {
        const ext = path.extname(field.filename || '.jpg').toLowerCase();
        const allowedExts = ['.jpg', '.jpeg', '.png', '.webp', '.pdf'];
        if (!allowedExts.includes(ext)) return null;
        const filename = `idcard_${Date.now()}_${Math.random().toString(36).slice(2, 8)}${ext}`;
        const dest = path.join(UPLOAD_DIR, filename);
        await pipeline(field.file, fs.createWriteStream(dest));
        return `/uploads/id_cards/${filename}`;
    }

    // Create a new internal registration (multipart: fields + ID card files)
    fastify.post('/', async (request, reply) => {
        try {
            const fields = {};
            let rectoPath = null, versoPath = null;

            // Iterate through all multipart parts
            for await (const part of request.parts()) {
                if (part.type === 'file') {
                    if (part.fieldname === 'id_card_recto') {
                        rectoPath = await saveUploadedFile(part);
                        if (!rectoPath) return reply.status(400).send({ error: 'Format recto non supporté. Utilisez JPG, PNG, WEBP ou PDF.' });
                    } else if (part.fieldname === 'id_card_verso') {
                        versoPath = await saveUploadedFile(part);
                        if (!versoPath) return reply.status(400).send({ error: 'Format verso non supporté. Utilisez JPG, PNG, WEBP ou PDF.' });
                    }
                } else {
                    // Regular form field
                    fields[part.fieldname] = part.value;
                }
            }

            const { nom, prenom, email, telephone, nin, cat_id, date_naiss, adresse } = fields;

            if (!nom || !prenom) {
                return reply.status(400).send({ error: 'Nom et prénom sont obligatoires' });
            }

            const result = await db.query(
                `INSERT INTO "registrations" (nom, prenom, email, telephone, nin, cat_id, date_naiss, adresse, inscription_source, id_card_recto_path, id_card_verso_path, status)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'INTERNE', $9, $10, 'PENDING') RETURNING *`,
                [nom, prenom, email || null, telephone || null, nin || null, cat_id || null, date_naiss || null, adresse || null, rectoPath, versoPath]
            );
            return result.rows[0];
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Upload ID card (recto/verso) for an existing registration
    fastify.post('/:id/id-card', async (request, reply) => {
        const { id } = request.params;
        try {
            let rectoPath = null, versoPath = null;

            // Iterate through all multipart parts
            for await (const part of request.parts()) {
                if (part.type === 'file') {
                    if (part.fieldname === 'id_card_recto') {
                        rectoPath = await saveUploadedFile(part);
                    } else if (part.fieldname === 'id_card_verso') {
                        versoPath = await saveUploadedFile(part);
                    }
                }
            }

            if (!rectoPath && !versoPath) return reply.status(400).send({ error: 'Aucun fichier fourni' });

            const updates = [];
            const values = [];
            let idx = 1;
            if (rectoPath) { updates.push(`id_card_recto_path = $${idx++}`); values.push(rectoPath); }
            if (versoPath) { updates.push(`id_card_verso_path = $${idx++}`); values.push(versoPath); }
            values.push(id);

            await db.query(`UPDATE "registrations" SET ${updates.join(', ')} WHERE id = $${idx}`, values);
            return { status: 'Uploaded', id_card_recto_path: rectoPath, id_card_verso_path: versoPath };
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Helper: Get next available RFID number
    async function getNextAvailableRfid() {
        // Get all valid RFID numbers and find the maximum numeric suffix
        const result = await db.query(`
            SELECT "LEC_RFID" FROM "LECTEUR" 
            WHERE "LEC_RFID" IS NOT NULL AND "LEC_RFID" ~ '^RFID-[0-9]+$'
        `);

        let maxNum = 0;
        for (const row of result.rows) {
            const match = row.LEC_RFID.match(/RFID-(\d+)/);
            if (match) {
                const num = parseInt(match[1], 10);
                if (!isNaN(num) && num > maxNum) {
                    maxNum = num;
                }
            }
        }

        const nextNum = maxNum + 1;
        return `RFID-${String(nextNum).padStart(6, '0')}`;
    }

    // Get next available RFID suggestion
    fastify.get('/rfid/next-available', async (request, reply) => {
        try {
            const suggestedRfid = await getNextAvailableRfid();
            return { suggestedRfid };
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Check if RFID exists
    fastify.get('/rfid/check', async (request, reply) => {
        const { rfid } = request.query;
        if (!rfid) return reply.status(400).send({ error: 'RFID required' });
        
        try {
            const result = await db.query(
                'SELECT "LEC_NOM", "LEC_PRENOM" FROM "LECTEUR" WHERE "LEC_RFID" = $1',
                [rfid]
            );
            
            if (result.rows.length > 0) {
                const user = result.rows[0];
                return { exists: true, user: `${user.LEC_NOM} ${user.LEC_PRENOM}` };
            } else {
                return { exists: false };
            }
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Approve a registration: Create a LECTEUR with all fields + assign RFID (custom or auto)
    fastify.put('/:id/approve', async (request, reply) => {
        const { id } = request.params;
        const { rfid_code: customRfid } = request.body || {};
        const client = await db.connect();
        try {
            await client.query('BEGIN');

            // Get registration from registrations table
            const regRes = await client.query('SELECT * FROM "registrations" WHERE id = $1', [id]);
            if (regRes.rows.length === 0) throw new Error('Registration not found');
            const reg = regRes.rows[0];
            
            if (reg.status !== 'PENDING') throw new Error('Already processed');

            // Validate custom RFID if provided (check for duplicates)
            let rfidCode = customRfid;
            if (rfidCode) {
                const existing = await client.query(
                    'SELECT 1 FROM "LECTEUR" WHERE "LEC_RFID" = $1',
                    [rfidCode]
                );
                if (existing.rows.length > 0) {
                    throw new Error('Ce numéro RFID est déjà utilisé');
                }
            }

            // Check if reader already exists in LECTEUR (by lec_id or nin)
            let targetId = reg.lec_id;
            let existingReaderRes = null;
            
            if (targetId) {
                existingReaderRes = await client.query('SELECT "LEC_ID" FROM "LECTEUR" WHERE "LEC_ID" = $1', [targetId]);
            }
            
            if ((!existingReaderRes || existingReaderRes.rows.length === 0) && reg.nin) {
                existingReaderRes = await client.query('SELECT "LEC_ID" FROM "LECTEUR" WHERE "LEC_NIN" = $1', [reg.nin]);
            }

            // Generate rfidCode if not provided
            if (!rfidCode) {
                // We need a numeric seed for the auto-RFID. 
                // If we have an existing numeric ID, use it. Otherwise, get the next numeric ID.
                let seedId = targetId && /^\d+$/.test(targetId) ? parseInt(targetId) : null;
                if (!seedId) {
                    const maxRes = await client.query(`
                        SELECT MAX(CAST("LEC_ID" AS INTEGER)) as max_id 
                        FROM "LECTEUR" 
                        WHERE "LEC_ID" ~ '^[0-9]+$'
                    `);
                    seedId = (maxRes.rows[0].max_id || 0) + 1;
                }
                rfidCode = `RFID-${String(seedId).padStart(6, '0')}`;
            }

            if (existingReaderRes && existingReaderRes.rows.length > 0) {
                // Update existing reader
                targetId = existingReaderRes.rows[0].LEC_ID;
                await client.query(
                    `UPDATE "LECTEUR" SET 
                        "LEC_NOM" = $1, "LEC_PRENOM" = $2, "LEC_EMAIL" = $3, "LEC_TEL" = $4,
                        "CAT_ID" = $5, "LEC_DATE_NAISSANCE" = $6, "LEC_ADRESSE" = $7,
                        "LEC_STATUT" = 1, "LEC_RFID" = $8, "LEC_DATE_ADHESION" = NOW()
                     WHERE "LEC_ID" = $9`,
                    [reg.nom, reg.prenom, reg.email, reg.telephone,
                     reg.cat_id, reg.date_naiss, reg.adresse, rfidCode, targetId]
                );
            } else {
                // Generate a new numeric LEC_ID if none exists
                if (!targetId || !/^\d+$/.test(targetId)) {
                    const maxRes = await client.query(`
                        SELECT MAX(CAST("LEC_ID" AS INTEGER)) as max_id 
                        FROM "LECTEUR" 
                        WHERE "LEC_ID" ~ '^[0-9]+$'
                    `);
                    targetId = ((maxRes.rows[0].max_id || 0) + 1).toString();
                }

                // Create reader in LECTEUR with all fields
                await client.query(
                    `INSERT INTO "LECTEUR" ("LEC_ID", "LEC_NOM", "LEC_PRENOM", "LEC_EMAIL", "LEC_TEL",
                     "LEC_NIN", "CAT_ID", "LEC_DATE_NAISSANCE", "LEC_ADRESSE", "LEC_DATE_ADHESION", "LEC_STATUT", "LEC_RFID", "BIB_ID")
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), 1, $10, 1)`,
                    [targetId, reg.nom, reg.prenom, reg.email, reg.telephone,
                     reg.nin, reg.cat_id, reg.date_naiss, reg.adresse, rfidCode]
                );
            }

            // Update registration status and RFID code
            await client.query(
                'UPDATE "registrations" SET status = $1, rfid_code = $2 WHERE id = $3',
                ['APPROVED', rfidCode, id]
            );

            await client.query('COMMIT');
            return { status: 'Approved', lec_id: targetId, rfid_code: rfidCode, inscription_source: reg.inscription_source };
        } catch (err) {
            await client.query('ROLLBACK');
            reply.status(500).send({ error: err.message });
        } finally {
            client.release();
        }
    });

    // Reject a registration
    fastify.put('/:id/reject', async (request, reply) => {
        const { id } = request.params;
        try {
            await db.query('UPDATE "registrations" SET status = $1 WHERE id = $2', ['REJECTED', id]);
            return { status: 'Rejected' };
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });

    // Remove registration entry
    fastify.delete('/:id', async (request, reply) => {
        const { id } = request.params;
        try {
            // Delete ID card files first
            const regRes = await db.query('SELECT id_card_recto_path, id_card_verso_path FROM "registrations" WHERE id = $1', [id]);
            if (regRes.rows.length > 0) {
                for (const col of ['id_card_recto_path', 'id_card_verso_path']) {
                    if (regRes.rows[0][col]) {
                        const filePath = path.join(__dirname, '../..', regRes.rows[0][col]);
                        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
                    }
                }
            }
            await db.query('DELETE FROM "registrations" WHERE id = $1', [id]);
            return { status: 'Deleted' };
        } catch (err) {
            reply.status(500).send({ error: err.message });
        }
    });
}

module.exports = registrationsRoutes;
