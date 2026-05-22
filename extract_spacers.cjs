const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\GSS1\\Documents\\Library\\Library_Project\\1754215192533-engagement________________.html', 'utf8');
const regex = /(<div[^>]*>.*?<span class="_ _\d+"><\/span>.*?<\/div>)/g;
let match;



while ((match = regex.exec(content)) !== null) {



    console.log(match[1]);
}
