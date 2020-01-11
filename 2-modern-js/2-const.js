// Scalar values
// these values can't change because of the const declaration, they are immutable references
const answer = 42;
const greeting = 'Hello';

// Arrays and Objects: values of arrays and objects can change, it's a constant immutable reference
// to the object, not the values within
const numbers = [2, 4, 6];
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

// Object.freeze() // freezes first level only