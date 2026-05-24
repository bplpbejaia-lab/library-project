const users = [
    { login: 'Brahim', password: `{xar}d|%'&"` },
    { login: 'MANNIFIX', password: `zxu%'&"` },
    { login: 'Bibliobank', password: `~yqxtb{cber` },
    { login: 'Hamida Biblio', password: `~d{rz&"'!` },
    { login: 'Rosa', password: `s~yv$%&` },
    { login: 'Smail PC', password: `trec~q~tvc%&` },
    { login: 'Behloul-Billal', password: `%"'!/!ur}v~v` },
    { login: 'Nacéra', password: `vnv` },
    { login: 'PUBLIQUE01', password: `&` }
];

console.log("Testing single byte XOR keys:");
for (let key = 1; key < 256; key++) {
    let allReadable = true;
    const decrypted = [];
    
    for (const u of users) {
        let decStr = "";
        for (let i = 0; i < u.password.length; i++) {
            const decChar = u.password.charCodeAt(i) ^ key;
            if (decChar < 32 || decChar > 126) {
                allReadable = false;
                break;
            }
            decStr += String.fromCharCode(decChar);
        }
        if (!allReadable) break;
        decrypted.push({ login: u.login, dec: decStr });
    }
    
    if (allReadable) {
        console.log(`\nKey: ${key} (0x${key.toString(16)})`);
        decrypted.forEach(d => console.log(`  ${d.login.padEnd(15)}: ${d.dec}`));
    }
}

console.log("\nTesting single byte additive shifts (dec = (char - key + 256) % 256):");
for (let key = 1; key < 256; key++) {
    let allReadable = true;
    const decrypted = [];
    
    for (const u of users) {
        let decStr = "";
        for (let i = 0; i < u.password.length; i++) {
            const decChar = (u.password.charCodeAt(i) - key + 256) % 256;
            if (decChar < 32 || decChar > 126) {
                allReadable = false;
                break;
            }
            decStr += String.fromCharCode(decChar);
        }
        if (!allReadable) break;
        decrypted.push({ login: u.login, dec: decStr });
    }
    
    if (allReadable) {
        console.log(`\nShift Key: ${key}`);
        decrypted.forEach(d => console.log(`  ${d.login.padEnd(15)}: ${d.dec}`));
    }
}
