// Unlike a browser, what node does internally to `arguments` just like this:

// function(exports, module, require, __filename, __dirname) {
//console.log(arguments);

let g = 1 // scope of g var is the hidden wrapping function

exports.a = 42 // exports is an argument to the hidden wrapping function
module.exports.b = 37

// exports = () => {} // not ok
module.exports = () => {} // this is ok, top level api does not have to be an object

// return module.exports
// node always returns this even if you don't
// } (module.exports, )