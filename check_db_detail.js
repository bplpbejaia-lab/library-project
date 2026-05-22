import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    user: 'postgres',
    password: 'farid',
    host: 'localhost',
    port: 5432,
    database: 'Library'
});

async function check() {
    try {
        console.log('--- NOTICE_EXEMPLAIRE detail ---');
        const res = await pool.query('SELECT \"EXP_ID\", \"STA_EXP_ID\", \"LEC_ID\" FROM \"NOTICE_EXEMPLAIRE\" WHERE \"DOC_ID\" IN (14224, 14240)');
        console.table(res.rows);
    } catch (e) {
        console.error(e);
    } finally {
        await pool.end();
    }
}
check();
