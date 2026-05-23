const db = require('./src/db/pool');
async function run() {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS "registrations" (
                id SERIAL PRIMARY KEY,
                nom TEXT,
                prenom TEXT,
                email TEXT,
                telephone TEXT,
                nin TEXT,
                cat_id INTEGER,
                date_naiss DATE,
                adresse TEXT,
                registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                status TEXT DEFAULT 'PENDING',
                inscription_source TEXT DEFAULT 'EXTERNE',
                rfid_code TEXT
            );
        `);

        // Add new columns if table already exists
        await db.query(`ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS nin TEXT`);
        await db.query(`ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS cat_id INTEGER`);
        await db.query(`ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS date_naiss DATE`);
        await db.query(`ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS adresse TEXT`);
        await db.query(`ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS inscription_source TEXT DEFAULT 'EXTERNE'`);
        await db.query(`ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS rfid_code TEXT`);

        console.log('Registration table created/updated.');
        process.exit(0);
    } catch(e) {
        console.error(e);
        process.exit(1);
    }
}
run();
