const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    password: 'farid',
    host: 'localhost',
    port: 5432,
    database: 'Library'
});

async function discover() {
    try {
        const t = 'NOTICE';
        const res = await pool.query('SELECT * FROM public."' + t + '" LIMIT 1');
        console.log(`Columns for ${t}:`, Object.keys(res.rows[0]).join(', '));

        const t2 = 'NOTICE_EXEMPLAIRE';
        const res2 = await pool.query('SELECT * FROM public."' + t2 + '" LIMIT 1');
        console.log(`Columns for ${t2}:`, Object.keys(res2.rows[0]).join(', '));
    } catch (e) {
        console.error(e);
    } finally {
        await pool.end();
    }
}

discover();
