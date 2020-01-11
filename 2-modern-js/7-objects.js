const mystery = "answer"

const PI = Math.PI

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [mystery]: 42,
  // PI: PI, no need to do this
  PI
}

// obj.mystery will be undefined
// obj.answer will evaluate to 42
