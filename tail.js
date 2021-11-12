
/*
===================================
Returns an array of everything except the first item
===================================
*/
const tail = function(array) {
  if (!(array) || array.length === 1 || !(Array.isArray(array))) {
    return [];
  }
  return array.slice(1);
};

module.exports = tail;

console.log();