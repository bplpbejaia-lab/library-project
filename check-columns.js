import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: 'farid',
    host: 'localhost',
    port: 5432,
    database: 'Library'
});




async function checkColumns() {
    try {
        // Check NOTICE table columns
        const result = await pool.query(`
            SELECT column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name = 'NOTICE' 
            ORDER BY ordinal_position
        `);
        
        console.log('NOTICE table columns:');
        result.rows.forEach(row => {
            console.log(`  ${row.column_name}: ${row.data_type}`);
        });

        // Also check the first book
        const bookResult = await pool.query('SELECT * FROM "NOTICE" LIMIT 1');
        if (bookResult.rows.length > 0) {
            console.log('\nFirst book keys:', Object.keys(bookResult.rows[0]));
            console.log('First book:', JSON.stringify(bookResult.rows[0], null, 2));
        }
        
        await pool.end();
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

checkColumns();
