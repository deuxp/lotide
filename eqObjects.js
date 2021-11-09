const eqArrays = require('./eqArray');
// ========================================================================
// the function: eqObjects()
// ========================================================================
/*
input -> object actual, object expected
paramPrep: compare four lists: keys for both and values for both

make two arrays of keys.
use the keys of the other in the others [] and compare
if no match pop it off return false

return make it to the end no error TRUE
output-> Boolean
*/
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


module.exports = eqObjects;