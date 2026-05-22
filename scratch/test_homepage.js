

async function test() {
    try {
        const res = await fetch('http://localhost:3001/');
        console.log('Status:', res.status);
        const text = await res.text();
        console.log('Homepage Includes i18n.js:', text.includes('i18n.js'));
        
        const res2 = await fetch('http://localhost:3001/pages/profile.html');
        console.log('Profile Status:', res2.status);
        const text2 = await res2.text();
        console.log('Profile Includes i18n.js:', text2.includes('i18n.js'));
    } catch (err) {
        console.error('Error fetching:', err);
    }
}

test();
