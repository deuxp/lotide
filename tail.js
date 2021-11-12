// Returns an array of everything except the first item
const tail = function(array) {
  // check length and is an array
  if (!(array) || array.length === 1 || !(Array.isArray(array))) {
    return [];
  }
  return array.slice(1);
};

module.exports = tail;
