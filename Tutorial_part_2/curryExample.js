const R = require('ramda');

const add = (x, y) => x + y; // x + y = z
const addCurried = R.curry(add); // returns a curried functions
const add10 = addCurried(10); // returns a function taking one more parameter

console.log(add10);

var z = add10(5);
console.log(z);

const addMultiple = (a, b, c, d, e) => a + b + c + d + e;
const addMultiCurried = R.curry(addMultiple);
const addBCDE = addMultiCurried(10);
const addCDE = addMultiCurried(10, 5);
const addDE = addMultiCurried(10, 5, 2);
const addE = addMultiCurried(10, 5, 2, 7);

console.log(addBCDE(5, 2, 7, 1));
console.log(addCDE(2, 7, 1));
console.log(addDE(7, 1));
console.log(addE(1));
