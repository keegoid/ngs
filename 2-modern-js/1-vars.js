{
  // Block Scope
}

if (true) {
  // Block Scope
}

// replace var with let to prevent problem with access to var variable outside of block scope
// const also stays within the block scope
for (var i = 1; i <= 10; i++) {
  // Block Scope
}


function sum(a, b) {
  // Function Scope
  var result = a + b;
}

sum(4 + 3);
