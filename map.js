// =================================================================
// Input ->     (a) array to map (b) a callback function
// Output->     return a new array based on the results of the callback function
// Behaviour -> Performs a callback function on each item of an array.
// =================================================================

const map = function(array, callback) {
  let result = [];
  for (const item of array) {
    result.push(callback(item));
  }
  return result;
};


module.exports = map;
