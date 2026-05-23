const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

const replacements = [
    { from: /href="\/"/g, to: 'href="/admin/"' },
    { from: /href="\/index\.html"/g, to: 'href="/admin/"' },
    { from: /href="\/books\.html"/g, to: 'href="/admin/books.html"' },
    { from: /href="\/lecteurs\.html"/g, to: 'href="/admin/lecteurs.html"' },
    { from: /href="\/orders\.html"/g, to: 'href="/admin/orders.html"' },
    { from: /href="\/returns\.html"/g, to: 'href="/admin/returns.html"' },
    { from: /href="\/registrations\.html"/g, to: 'href="/admin/registrations.html"' },
    { from: /href="\/utilisateurs\.html"/g, to: 'href="/admin/utilisateurs.html"' },
    { from: /href="\/stats\.html"/g, to: 'href="/admin/stats.html"' },
    { from: /href="\/dashboard2\.html"/g, to: 'href="/admin/dashboard2.html"' },
    { from: /href="\/reader_profile\.html"/g, to: 'href="/admin/reader_profile.html"' },
    { from: /href="\/access_control\.html"/g, to: 'href="/admin/access_control.html"' },
    { from: /href="\/access_history\.html"/g, to: 'href="/admin/access_history.html"' },
    
    { from: /href="\/public\//g, to: 'href="/admin/public/' },
    { from: /src="\/public\//g, to: 'src="/admin/public/' },
    { from: /src="\/images\//g, to: 'src="/admin/images/' },
    { from: /src="\/uploads\//g, to: 'src="/admin/uploads/' },
    { from: /onerror="this\.src='\/public\//g, to: 'onerror="this.src=\'/admin/public/' },
    
    { from: /fetch\('\/api\/admin\//g, to: "fetch('/admin/api/admin/" },
    { from: /fetch\("\/api\/admin\//g, to: 'fetch("/admin/api/admin/' },
    { from: /fetch\(url\)/g, to: "fetch(url.startsWith('/') ? '/admin' + url : url)" },
    { from: /EventSource\("\/api\/admin\//g, to: 'EventSource("/admin/api/admin/' }
];

files.forEach(file => {
    const filePath = path.join(publicDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(rep => {
        content = content.replace(rep.from, rep.to);
    });
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated paths in ${file}`);
    }
});
