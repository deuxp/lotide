// =================================================================
// Input      -> an array of any length
// Return     -> a new array of everything except the first item
// Behaviour  -> Uses slice to return a shallow copy of the original.
// =================================================================
const tail = function(array) {
  // check length and is an array
  if (!(array) || array.length === 1 || !(Array.isArray(array))) {
    return [];
  }
  return array.slice(1);
};

module.exports = tail;
