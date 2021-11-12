// Performs a callback function on each item of an array.
// input -> (a) array to map (b) a callback function
// output-> return a new array based on the results of the callback function
const map = function(array, callback) {
  let result = [];
  for (const item of array) {
    result.push(callback(item));
  }
  return result;
};


module.exports = map;
