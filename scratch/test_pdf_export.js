import { Pool } from 'pg';


const pool = new Pool({
    user: 'postgres',
    password: 'farid',
    host: 'localhost',
    port: 5432,
    database: 'Library'
});

async function runTest() {
    try {
        const res = await pool.query('SELECT * FROM "LECTEUR" WHERE "LEC_ID" = $1', ['admin']);
        if (res.rows.length === 0) {
            console.error('Admin reader not found in DB');
            return;
        }
        
        const user = res.rows[0];
        const isInvalid = (s) => !s || s.trim().split('').every(c => c === '?');
        const userData = {
            lecteurId: user.LEC_ID,
            username: user.LEC_ID,
            nom: isInvalid(user.LEC_NOM_AR) ? user.LEC_NOM : user.LEC_NOM_AR,
            prenom: isInvalid(user.LEC_PRENOM_AR) ? user.LEC_PRENOM : user.LEC_PRENOM_AR,
            nomLatin: user.LEC_NOM,
            prenomLatin: user.LEC_PRENOM,
            email: user.LEC_EMAIL,
            telephone: user.LEC_TEL,
            adresse: user.LEC_ADRESSE,
            naissance: user.LEC_DATE_NAISSANCE,
            lieuNaissance: user.LEC_LIEU_NAISSANCE || '',
            nationalite: user.LEC_NATIONALITE || '',
            genre: user.LEC_GENRE || '',
            profession: user.LEC_PROFESSION || '',
            nin: user.LEC_NIN,
            photo: user.LEC_PHOTO,
            cniFront: user.LEC_CNI_FRONT,
            cniBack: user.LEC_CNI_BACK,
            statut: user.LEC_STATUT,
            categorie: user.CAT_ID,
            rfid: user.LEC_RFID,
            date_expiration: user.LEC_DATE_EXPIRATION,
            date_adhesion: user.CREATE_DATE,
            emailVerified: user.LEC_EMAIL_VERIFIED || false
        };

        console.log('Sending request to export-engagement-pdf-fr...');
        const response = await fetch('http://localhost:3001/api/auth/export-engagement-pdf-fr', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        console.log('Response status:', response.status);
        const result = await response.json();
        console.log('Response body:', JSON.stringify(result, null, 2));

    } catch (err) {
        console.error('Error during test:', err);
    } finally {
        await pool.end();
    }
}

runTest();
