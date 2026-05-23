const db = require('./src/db/pool');

async function migrate() {
    try {
        console.log('Starting Access Control Migration...');
        
        // 1. Add current state to LECTEUR table
        await db.query(`ALTER TABLE "LECTEUR" ADD COLUMN IF NOT EXISTS "LEC_ACCESS_STATE" VARCHAR(20) DEFAULT 'OUT'`);
        
        // 2. Create ACCESS_LOGS table
        await db.query(`
            CREATE TABLE IF NOT EXISTS "ACCESS_LOGS" (
                id SERIAL PRIMARY KEY,
                "LEC_ID" VARCHAR(50),
                "RFID_CODE" VARCHAR(50),
                "ACTION" VARCHAR(20), -- 'IN', 'OUT', 'DECLINED'
                "REASON" TEXT,
                "SCAN_DATE" TIMESTAMP DEFAULT NOW()
            )
        `);
        
        // 3. Create table for cards that should NOT be reset at midnight (e.g. staff, residents)
        await db.query(`
            CREATE TABLE IF NOT EXISTS "ACCESS_RESET_EXCLUSIONS" (
                "LEC_ID" VARCHAR(50) PRIMARY KEY
            )
        `);

        console.log('Access Control Migration successful');
        process.exit(0);
    } catch (e) {
        console.error('Migration failed:', e);
        process.exit(1);
    }
}
migrate();
