import fs from 'fs';
import http from 'http';

const data = JSON.stringify({
    lecteurId: "28",
    nomLatin: "BOUKHIAMA",
    prenomLatin: "Abderrazak",
    nin: "123456789012345678",
    email: "test@test.com",
    telephone: "0559030467",
    adresse: "BOUKHIAMA",
    naissance: "1990-05-18T00:00:00.000Z",
    profession: "Commerçant",
    nationalite: "Algérie",
    wilaya: "Béjaïa",
    genre: "Masculin",
    sexe: "Masculin"
});

const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/api/auth/export-engagement-pdf-fr',
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
        console.log('Response body:', body.toString('utf-8'));
    });
});

req.on('error', (e) => {
    console.error('Request error:', e.message);
});

req.write(data);
req.end();
