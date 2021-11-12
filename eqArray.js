// =================================================================
// Input:       (A) an array (B) an array
// Return:      Boolean
// Behaviour:   compares 2 arrays, determines whether 2 arrays
//              are strictly equal.
// =================================================================

const eqArrays = function(array1, array2) {
  // guard clause: Checks that they are both arrays
  if (!(Array.isArray(array1)) || !(Array.isArray(array2))) {
    throw Error('must pass array as args');
  }
  // checks the array lengths for an automatic return false
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // if any item does not deep equal, return false
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;