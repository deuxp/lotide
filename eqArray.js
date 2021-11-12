// =================================================================
// eqArrays(arg1, arg2): is a function that determines whether 2 arrays
//                       are strictly equal.
// Parameters: (A) an array (B) an array
// Return:     Boolean
// Behaviour:
// =================================================================

const eqArrays = function(array1, array2) {
  if (!(Array.isArray(array1)) || !(Array.isArray(array2))) {
    throw Error('must pass array as args');
  }
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;