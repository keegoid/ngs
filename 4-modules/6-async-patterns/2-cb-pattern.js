const fs = require('fs');

// asynchronous read operation with callback function at the end, which is always at the end, error
// first, if no error the first argument will be passed as null
// TEST will run first due to async operation
// callbacks must be nested inside each other, which is a limitation somehow
fs.readFile(__filename, function cb(err, data) {
  console.log('File data is', data);
});

console.log('TEST');
