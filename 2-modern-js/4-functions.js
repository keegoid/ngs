// "this" needs an explicit caller
const X = function () {
  // "this" here is the caller of X
};

// arrow functions don't care who calls them
const Y = () => {
  // "this" here is NOT the caller of Y

  // It's the same "this" found in Y's scope
};

function ()
// vs
() =>
