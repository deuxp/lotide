// Return the middle item for an odd numbered array..
// for even numbered array, return the two middle items
const middle = function(array) {
  if (!(array) || array.length < 3 || !(Array.isArray(array))) {
    return [];
  }
  const len = array.length;
  return len %  2 ? [array[Math.floor(len / 2)]] : [array[len / 2 - 1], array[len / 2]];
};


module.exports = middle;
