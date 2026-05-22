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
        const res = await pool.query('SELECT * FROM "registrations" ORDER BY registration_date DESC LIMIT 5');
        console.log('Latest registrations:');
        console.table(res.rows);
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
check();
