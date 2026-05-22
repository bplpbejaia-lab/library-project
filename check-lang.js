import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: 'farid',
    host: 'localhost',
    port: 5432,
    database: 'Library'
});

async function check() {
    try {
        // Check if LANGUE table exists
        const tableCheck = await pool.query(`
            SELECT table_name FROM information_schema.tables 
            WHERE table_name LIKE 'LANGUE%' OR table_name LIKE 'LANGUAGE%' OR table_name LIKE 'LANG%'
        `);
        console.log('Language-related tables:', tableCheck.rows);
        
        await pool.end();
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

check();
