const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    password: 'farid',
    host: 'localhost',
    port: 5432,
    database: 'Library'
});

async function check() {
    try {
        console.log('--- Columns in registrations ---');
        const cols = await pool.query("SELECT column_name, data_type, column_default FROM information_schema.columns WHERE table_name = 'registrations'");
        console.log(cols.rows);

        console.log('\n--- Constraints in registrations ---');
        const consts = await pool.query("SELECT conname, pg_get_constraintdef(c.oid) FROM pg_constraint c JOIN pg_namespace n ON n.oid = c.connamespace WHERE n.nspname = 'public' AND conrelid = 'registrations'::regclass");
        console.log(consts.rows);

        console.log('\n--- Lecteurs missing from registrations table ---');
        const missing = await pool.query('SELECT "LEC_ID", "LEC_NOM", "LEC_PRENOM" FROM "LECTEUR" WHERE "LEC_ID" NOT IN (SELECT COALESCE(lec_id, \'\') FROM registrations) ORDER BY "CREATE_DATE" DESC');
        console.log(missing.rows);

        console.log('\n--- Recent registrations entries (full) ---');
        const regs = await pool.query('SELECT * FROM "registrations" ORDER BY registration_date DESC LIMIT 10');
        console.log(regs.rows);
    } catch (e) {
        console.error('Error:', e.message);
    } finally {
        await pool.end();
    }
}
check();
