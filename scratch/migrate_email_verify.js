import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    password: 'farid',
    host: '127.0.0.1',
    port: 5432,
    database: 'Library'
});

async function migrate() {
    try {
        await pool.query('ALTER TABLE "LECTEUR" ADD COLUMN IF NOT EXISTS "LEC_EMAIL_VERIFIED" BOOLEAN DEFAULT FALSE;');
        await pool.query('ALTER TABLE "LECTEUR" ADD COLUMN IF NOT EXISTS "LEC_VERIFICATION_TOKEN" TEXT;');
        console.log('Migration successful: Added LEC_EMAIL_VERIFIED and LEC_VERIFICATION_TOKEN');
    } catch (err) {
        console.error('Migration failed:', err);
    } finally {
        await pool.end();
    }
}

migrate();
