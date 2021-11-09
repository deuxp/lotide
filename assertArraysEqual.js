const eqArrays = require('./eqArray');

// ==================================
// Compare two arrays for equality
// ==================================

const assertArraysEqual = (actual, expected) => {
  const pass = `💎 💎 💎 Assertion Passed: ${actual} === ${expected}`;
  const notPass = `👁 👄 👁 Assertion Failed: ${actual} !== ${expected}`;
  eqArrays(actual, expected) ? console.log(pass) : console.log(notPass);
};


module.exports = assertArraysEqual;