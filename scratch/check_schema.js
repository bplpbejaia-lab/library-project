const db = require('../src/db/pool');

async function checkSchema() {
    try {
        console.log('Checking LECTEUR table...');
        const resL = await db.query('SELECT * FROM "LECTEUR" LIMIT 1');
        if (resL.rows.length > 0) {
            console.log('LECTEUR columns:', Object.keys(resL.rows[0]));
        } else {
            console.log('LECTEUR table is empty.');
        }

        console.log('Checking registrations table...');
        const resR = await db.query('SELECT * FROM "registrations" LIMIT 1');
        if (resR.rows.length > 0) {
            console.log('registrations columns:', Object.keys(resR.rows[0]));
        } else {
            console.log('registrations table is empty.');
        }
        
        process.exit(0);
    } catch (err) {
        console.error('Schema check failed:', err);
        process.exit(1);
    }
}

checkSchema();
