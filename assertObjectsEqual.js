const eqObjects = require('./eqObjects');
// ========================================================================
// FUNCTION IMPLEMENTATION -- ASSERTION
// ========================================================================
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`💎 💎 💎 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚨 🚨 🚨 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


module.exports = assertObjectsEqual;