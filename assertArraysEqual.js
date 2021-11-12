const eqArrays = require('./eqArray');
// ==================================
// assertArraysEqual(arg1, arg2) is a function that determines whether 2 arrays are strictly equal.
// Return: undefined
// behaviour: logs the results to the console
// ==================================
const assertArraysEqual = (actual, expected) => {
  // msg logs
  const pass = `💎 💎 💎 Assertion Passed: ${actual} === ${expected}`;
  const notPass = `👁 👄 👁 Assertion Failed: ${actual} !== ${expected}`;
  eqArrays(actual, expected) ? console.log(pass) : console.log(notPass);
};


module.exports = assertArraysEqual;