import { Pool } from 'pg';
const pool = new Pool({
    user: 'postgres',
    password: 'farid',
    host: 'localhost',
    port: 5432,
    database: 'Library'
});

async function checkUtilisateurs() {
    try {
        const res = await pool.query('SELECT "UTL_ID", "UTL_LOGIN", "UTL_PASSWORD", "UTL_NOM", "UTL_PRENOM" FROM "UTILISATEUR" LIMIT 10');
        console.log(JSON.stringify(res.rows, null, 2));
    } catch (err) {
        console.error(err);
    } finally {
        await pool.end();
    }
}

checkUtilisateurs();
