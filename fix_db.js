import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    password: 'farid',
    host: 'localhost',
    port: 5432,
    database: 'Library'
});

async function fix() {
    try {
        console.log('Adding lec_id column to registrations table...');
        await pool.query(`ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS "lec_id" TEXT`);
        console.log('Successfully added lec_id column.');
        process.exit(0);
    } catch (e) {
        console.error('Error adding column:', e);
        process.exit(1);
    }
}
fix();
