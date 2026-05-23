// const fetch = require('node-fetch'); // Use native fetch in Node 24+
const db = require('./src/db/pool');

const BASE_URL = 'http://localhost:3002/api/admin/access';

async function runTests() {
    console.log('🚀 Starting Integration Tests for Access Control...');

    try {
        // 0. Setup Test Data
        await db.query('DELETE FROM "LECTEUR" WHERE "LEC_ID" LIKE \'TEST-%\'');
        await db.query('DELETE FROM "ACCESS_LOGS" WHERE "LEC_ID" LIKE \'TEST-%\'');
        
        // Reader 1: Valid
        await db.query(`
            INSERT INTO "LECTEUR" ("LEC_ID", "LEC_NOM", "LEC_PRENOM", "LEC_RFID", "LEC_STATUT", "LEC_ACCESS_STATE", "LEC_DATE_EXPIRATION", "CAT_ID", "LEC_DATE_NAISSANCE", "BIB_ID")
            VALUES ('TEST-VALID', 'Test', 'Valid', 'RFID-TEST-VALID', 1, 'OUT', '2030-01-01', 1, '2000-01-01', 1)
        `);

        // Reader 2: Unvalidated
        await db.query(`
            INSERT INTO "LECTEUR" ("LEC_ID", "LEC_NOM", "LEC_PRENOM", "LEC_RFID", "LEC_STATUT", "LEC_ACCESS_STATE", "CAT_ID", "LEC_DATE_NAISSANCE", "BIB_ID")
            VALUES ('TEST-UNVALID', 'Test', 'Unvalid', 'RFID-TEST-UNVALID', 0, 'OUT', 1, '2000-01-01', 1)
        `);

        // Reader 3: Expired
        await db.query(`
            INSERT INTO "LECTEUR" ("LEC_ID", "LEC_NOM", "LEC_PRENOM", "LEC_RFID", "LEC_STATUT", "LEC_ACCESS_STATE", "LEC_DATE_EXPIRATION", "CAT_ID", "LEC_DATE_NAISSANCE", "BIB_ID")
            VALUES ('TEST-EXPIRED', 'Test', 'Expired', 'RFID-TEST-EXPIRED', 1, 'OUT', '2020-01-01', 1, '2000-01-01', 1)
        `);

        // Reader 4: Penalized (Suspended)
        await db.query(`
            INSERT INTO "LECTEUR" ("LEC_ID", "LEC_NOM", "LEC_PRENOM", "LEC_RFID", "LEC_STATUT", "LEC_ACCESS_STATE", "LEC_DATE_EXPIRATION", "CAT_ID", "LEC_DATE_NAISSANCE", "LEC_FIN_PENALITE", "BIB_ID")
            VALUES ('TEST-PENALIZED', 'Test', 'Penalized', 'RFID-TEST-PENALIZED', 1, 'OUT', '2030-01-01', 1, '2000-01-01', '2030-01-01', 1)
        `);

        // --- TEST CASES ---

        // Case 1: Unknown RFID
        console.log('\nCase 1: Unknown RFID');
        const res1 = await fetch(`${BASE_URL}/scan`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rfid: 'RFID-UNKNOWN' })
        });
        console.log('Status:', res1.status, '(Expected 404)');
        const data1 = await res1.json();
        console.log('Message:', data1.error);

        // Case 2: Unvalidated Reader
        console.log('\nCase 2: Unvalidated Reader');
        const res2 = await fetch(`${BASE_URL}/scan`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rfid: 'RFID-TEST-UNVALID' })
        });
        console.log('Status:', res2.status, '(Expected 403)');

        // Case 3: Expired Card
        console.log('\nCase 3: Expired Card');
        const res3 = await fetch(`${BASE_URL}/scan`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rfid: 'RFID-TEST-EXPIRED' })
        });
        console.log('Status:', res3.status, '(Expected 403)');

        // Case 3b: Penalized Card
        console.log('\nCase 3b: Penalized Card');
        const res3b = await fetch(`${BASE_URL}/scan`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rfid: 'RFID-TEST-PENALIZED' })
        });
        console.log('Status:', res3b.status, '(Expected 403)');
        const data3b = await res3b.json();
        console.log('Reason/Error:', data3b.error);

        // Case 4: Valid Scan (Toggle OUT -> IN)
        console.log('\nCase 4: Valid Scan (OUT -> IN)');
        const res4 = await fetch(`${BASE_URL}/scan`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rfid: 'RFID-TEST-VALID' })
        });
        const data4 = await res4.json();
        console.log('New State:', data4.state, '(Expected IN)');

        // Case 5: Double Scan (within 10s)
        console.log('\nCase 5: Double Scan (within 10s)');
        const res5 = await fetch(`${BASE_URL}/scan`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rfid: 'RFID-TEST-VALID' })
        });
        const data5 = await res5.json();
        console.log('Status:', data5.status, '(Expected ignored)');

        // Case 6: Toggle back (IN -> OUT) - Wait 1s and force ignore check in server?
        // Actually I'll just wait 11s for a real test of toggle back
        console.log('\nCase 6: Valid Scan (IN -> OUT) - Waiting 11s...');
        await new Promise(r => setTimeout(r, 11000));
        const res6 = await fetch(`${BASE_URL}/scan`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rfid: 'RFID-TEST-VALID' })
        });
        const data6 = await res6.json();
        console.log('New State:', data6.state, '(Expected OUT)');

        // Case 7: Database Verification
        console.log('\nCase 7: DB Log Verification');
        const logsRes = await db.query('SELECT * FROM "ACCESS_LOGS" WHERE "LEC_ID" = \'TEST-VALID\' ORDER BY "SCAN_DATE" DESC');
        console.log('Logs found:', logsRes.rows.length, '(Expected 2 valid scans)');
        logsRes.rows.forEach(l => console.log(` - ${l.ACTION} at ${l.SCAN_DATE}`));

        console.log('\n✅ All Tests Completed!');
        process.exit(0);
    } catch (err) {
        console.error('\n❌ Test Error:', err);
        process.exit(1);
    }
}

runTests();
