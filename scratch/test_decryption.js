// Let's analyze the character values of the passwords
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

console.log("Analyzing ASCII codes of passwords:\n");
users.forEach(u => {
    const codes = [...u.password].map(c => c.charCodeAt(0));
    console.log(`${u.login.padEnd(15)} (${u.password.length} chars): ${u.password.padEnd(15)} -> Codes: [${codes.join(', ')}]`);
});
