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
        const tables = ['NOTICE', 'NOTICE_EXEMPLAIRE', 'LANGUE'];
        for (const table of tables) {
            console.log(`--- Columns for ${table} ---`);
            const res = await pool.query(`SELECT column_name FROM information_schema.columns WHERE table_name = $1`, [table]);
            console.log(res.rows.map(r => r.column_name).join(', '));
        }

        console.log(`--- Sample from NOTICE ---`);
        const sample = await pool.query(`SELECT * FROM "NOTICE" LIMIT 1`);
        console.log(JSON.stringify(sample.rows[0], null, 2));
    } catch (e) {
        console.error(e);
    } finally {
        await pool.end();
    }
}

discover();
