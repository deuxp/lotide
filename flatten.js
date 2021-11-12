// =================================================================
// flatten(array): returns nested arrays as one flat array.
// Parameters: (A) array
// Return:     new array
// Behaviour:  Iterates through the array and pushes each item to a new array.
//             If the item is an array, it will be concatenated to the new array.
//             Only works with one level of depth or nesting.
// =================================================================
const flatten = function(input) {
  let subArray = [];
  input.forEach(item => {
    if (Array.isArray(item)) {
      subArray = subArray.concat(item);
    } else {
      subArray.push(item);
    }
  });
  return subArray;
};


module.exports = flatten;