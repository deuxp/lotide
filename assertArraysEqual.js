const eqArrays = require('./eqArray');
// =================================================================
// Input      -> [actual] -an array to test, [expected] -an array to test against
// Return     -> undefined
// Behaviour  -> Compares the 2 arrays for strict equality, logs the results to the console
// =================================================================
const assertArraysEqual = (actual, expected) => {
  // msg logs
  const pass = `💎 💎 💎 Assertion Passed: ${actual} === ${expected}`;
  const notPass = `👁 👄 👁 Assertion Failed: ${actual} !== ${expected}`;
  eqArrays(actual, expected) ? console.log(pass) : console.log(notPass);
};


module.exports = assertArraysEqual;