const db = require('./src/db/pool');

async function check() {
    try {
        const res = await db.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'LECTEUR'");
        console.log('Columns:', res.rows.map(r => r.column_name).join(', '));
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
check();
