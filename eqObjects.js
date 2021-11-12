const eqArrays = require('./eqArray');
// =================================================================
// eqArrays(arg1, arg2): is a function that determines whether 2 objects
//                       are strictly equal.
// Parameters: (A) the object to test (B) the expected object
// Return:     Boolean
// Behaviour:  One list of keys is used for both objects.
//             The values is tested for strict equality.
//             If the objects properties amount to different lengths,
//             false is automatically returned.
// =================================================================
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