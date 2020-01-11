// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;
// are equivalent to:
const { PI, E, SQRT2 } = Math

// With require
// const { readFile } = require('fs');

const circle = {
  label: "circleX",
  radius: 2
}

// pass in radius from circle.radius
// don't have to write circle.radius as long as you use the curly brackets
// destructuring the radius property out of its object
// = {} makes precision optional with a default value in case none is specified in the function call
const circleArea = ({ radius }, { precision = 2 } = {}) => (PI * radius * radius).toFixed(precision)

// calling circleAria with circle, Javascript will know to put the two together for circle.radius
console.log(circleArea(circle))

// calling with precision will use this value
console.log(circleArea(circle, { precision: 5 }))

// position of items matters when destructuring
const [first, second, , fourth] = [10, 20, 30, 40]
