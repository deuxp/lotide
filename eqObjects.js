// =================================================================
// Input:       (A) the object to test (B) the expected object
// Return:      Boolean
// Behaviour:   One list of keys is used for both objects.
//              The values is tested for strict equality.
//              If the objects properties amount to different lengths,
//              false is automatically returned.
// =================================================================
const eqObjects = (actual, expected) => {
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);
  // checks lengths match to guard against false positive
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
