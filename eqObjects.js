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
  // checks if one object contains more properties than the other
  if (actualKeys.length !== expectedKeys.length) return false;
  for (let i = 0; i < actualKeys.length; i++) {
    const key = actualKeys[i];
    // checks the values of both objects using one set of keys for deep equality
    if (actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
};


module.exports = eqObjects;
