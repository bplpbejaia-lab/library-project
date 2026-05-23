const db = require('../src/db/pool');

async function addColumn() {
    try {
        console.log('Adding LEC_DATE_EXPIRATION column...');
        await db.query('ALTER TABLE "LECTEUR" ADD COLUMN IF NOT EXISTS "LEC_DATE_EXPIRATION" timestamp without time zone');
        console.log('Column added successfully.');
        process.exit(0);
    } catch (err) {
        console.error('Failed to add column:', err);
        process.exit(1);
    }
}

addColumn();
