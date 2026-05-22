import { Pool } from 'pg';
const pool = new Pool({
    user: 'postgres',
    password: 'farid',
    host: 'localhost',
    port: 5432,
    database: 'Library'
});

async function checkUser() {
    try {
        const res = await pool.query('SELECT * FROM "LECTEUR" WHERE "LEC_ID" = $1', ['admin']);
        console.log(JSON.stringify(res.rows, null, 2));
    } catch (err) {
        console.error(err);
    } finally {
        await pool.end();
    }
}

checkUser();
