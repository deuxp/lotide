// =================================================================
// Input      ->  an array of any length
// Return     ->  (a) the middle item for an odd numbered array, or
//                (b) the two middle items for even numbered array,
// Behaviour  ->  Uses a simple division formula for the index positions.
//                Tests first if the array is even or odd length.
// =================================================================
const middle = function(array) {
  if (!(array) || array.length < 3 || !(Array.isArray(array))) {
    return [];
  }
  const len = array.length;
  // ternary returns the middle item if the array is odd : or the middle two, if the array is even
  return len %  2 ? [array[Math.floor(len / 2)]] : [array[len / 2 - 1], array[len / 2]];
};


module.exports = middle;
