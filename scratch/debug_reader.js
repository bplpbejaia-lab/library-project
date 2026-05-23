const db = require('../src/db/pool');

async function debugReader(id) {
    try {
        console.log(`Debugging reader ${id}...`);
        const result = await db.query(`
            SELECT l.*, COALESCE(r.inscription_source, 'EXTERNE') as inscription_source,
                   r.id_card_recto_path, r.id_card_verso_path
            FROM "LECTEUR" l
            LEFT JOIN "registrations" r ON r.status = 'APPROVED' AND r.nom = l."LEC_NOM" AND r.prenom = l."LEC_PRENOM"
            WHERE l."LEC_ID" = $1
        `, [id]);
        console.log('Result length:', result.rows.length);
        if (result.rows.length > 0) {
            console.log('Reader data:', result.rows[0]);
        }
        process.exit(0);
    } catch (err) {
        console.error('DATABASE ERROR:', err.message);
        console.error(err.stack);
        process.exit(1);
    }
}

debugReader('zdeldel');
