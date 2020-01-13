const templateGenerator = require('./4-function');
// templateGenerator is a function since top level api is a function in this case

const myTemplate = templateGenerator('Hello Node!');

console.log(myTemplate);
