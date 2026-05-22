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
        const result = await pool.query(`
            SELECT column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name = 'COLLECTION' 
            ORDER BY ordinal_position
        `);
        
        console.log('COLLECTION table columns:');
        result.rows.forEach(row => {
            console.log(`  ${row.column_name}: ${row.data_type}`);
        });

        const collResult = await pool.query('SELECT * FROM "COLLECTION" LIMIT 3');
        console.log('\nFirst 3 collections:');
        collResult.rows.forEach(row => {
            console.log(JSON.stringify(row));
        });
        
        await pool.end();
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

check();
