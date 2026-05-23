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
        const res = await pool.query('SELECT * FROM "registrations" ORDER BY registration_date DESC LIMIT 5');
        console.log('Recent registrations:', JSON.stringify(res.rows, null, 2));
    } catch (e) {
        console.error('Error:', e.message);
    } finally {
        await pool.end();
    }
}
check();
