const fs = require('fs');

const data = fs.readFileSync(__filename); // synchronous read operation happens before TEST

console.log('File data is', data);

console.log('TEST');
