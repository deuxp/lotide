// ========================================================================
// helper functions
// ========================================================================

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};


const eqObjects = (actual, expected) => {
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);

  if (actualKeys.length !== expectedKeys.length) return false;

  for (let i = 0; i < actualKeys.length; i++) {
    const key = actualKeys[i];

    if (actual[key] !== expected[key]) {
      if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
        if (eqArrays(actual[key], expected[key])) {
          continue;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};


// ========================================================================
// FUNCTION IMPLEMENTATION
// ========================================================================


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`💎💎💎 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// ========================================================================
// testing
// ========================================================================


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
