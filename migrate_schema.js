const db = require('./src/db/pool');

async function migrate() {
    try {
        const queries = [
            'ALTER TABLE "LECTEUR" ADD COLUMN IF NOT EXISTS "LEC_GENRE" VARCHAR(20)',
            'ALTER TABLE "LECTEUR" ADD COLUMN IF NOT EXISTS "LEC_LIEU_NAISSANCE" VARCHAR(255)',
            'ALTER TABLE "LECTEUR" ADD COLUMN IF NOT EXISTS "LEC_NATIONALITE" VARCHAR(100)',
            'ALTER TABLE "LECTEUR" ADD COLUMN IF NOT EXISTS "LEC_PROFESSION" VARCHAR(255)',
            'ALTER TABLE "LECTEUR" ADD COLUMN IF NOT EXISTS "LEC_VILLE" VARCHAR(100)',
            'ALTER TABLE "LECTEUR" ADD COLUMN IF NOT EXISTS "LEC_CODE_POSTAL" VARCHAR(20)',
            'ALTER TABLE "LECTEUR" ADD COLUMN IF NOT EXISTS "LEC_WHATSAPP" VARCHAR(50)'
        ];
        
        for (const q of queries) {
            console.log('Executing:', q);
            await db.query(q);
        }
        
        console.log('Migration successful');
        process.exit(0);
    } catch (e) {
        console.error('Migration failed:', e);
        process.exit(1);
    }
}
migrate();
