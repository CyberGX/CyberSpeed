const fs = require('fs');
const path = require('path');

// Creating .env file...
console.log('# Creating .env file...')
fs.createReadStream(path.resolve('.env.example')).pipe(fs.createWriteStream(path.resolve('.env')));
