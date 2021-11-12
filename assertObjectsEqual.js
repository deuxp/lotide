const eqObjects = require('./eqObjects');
const inspect = require('util').inspect;
// =================================================================
// assertObjectsEqual(arg1, arg2) is a function that determines whether two objects are strictly equal.
// Return: undefined
// Behaviour: logs the results to the console
// =================================================================
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`💎 💎 💎 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚨 🚨 🚨 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


module.exports = assertObjectsEqual;