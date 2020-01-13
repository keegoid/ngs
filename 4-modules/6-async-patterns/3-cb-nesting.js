const fs = require('fs');

fs.readFile(__filename, function cb1(err, data) {
  fs.writeFile(__filename + '.copy', data, function cb2(err) {
    // Nest more callbacks here...
    // code is harder to write, read, and maintain
  });
});

console.log('TEST');
