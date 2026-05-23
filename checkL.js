const db = require('./src/db/pool');
async function checkL() {
    try {
        const r = await db.query('SELECT * FROM "LECTEUR" LIMIT 1');
        console.log("Columns LECTEUR:", Object.keys(r.rows[0]));
        process.exit(0);
    } catch(e) {
        console.error(e);
        process.exit(1);
    }
}
checkL();
