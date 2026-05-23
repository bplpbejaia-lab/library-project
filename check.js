const db = require('./src/db/pool');
async function check() {
    try {
        const r = await db.query('SELECT "ID_LECTEUR" FROM "LECTEUR" LIMIT 1');
        console.log("Columns:", Object.keys(r.rows[0]));
        process.exit(0);
    } catch(e) {
        console.error(e);
        process.exit(1);
    }
}
check();
