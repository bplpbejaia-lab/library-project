import fs from 'fs';
import http from 'http';

const data = JSON.stringify({
    lecteurId: "farid",
    nom: "بوزيدي",
    prenom: "أمين",
    nomLatin: "BOUZIDI",
    prenomLatin: "Amine",
    nin: "123456789012345678",
    email: "test@test.com",
    telephone: "0555555555",
    adresse: "Bejaia, Algérie",
    naissance: "2000-01-01",
    profession: "Etudiant"
});

const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/api/auth/export-engagement-pdf-ar',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
};

const req = http.request(options, (res) => {
    console.log('Status:', res.statusCode);
    console.log('Headers:', JSON.stringify(res.headers));
    
    const chunks = [];
    res.on('data', (chunk) => chunks.push(chunk));
    res.on('end', () => {
        const body = Buffer.concat(chunks);
        console.log('Response size:', body.length, 'bytes');
        
        if (res.statusCode === 200 && body.length > 100) {
            fs.writeFileSync('test_api_output.pdf', body);
            console.log('PDF saved to test_api_output.pdf');
        } else {
            console.log('Response body:', body.toString('utf-8').substring(0, 500));
        }
    });
});

req.on('error', (e) => {
    console.error('Request error:', e.message);
});

req.write(data);
req.end();
