// returns a new array, from the beginning up to an item that evaluates to true,
// based on a truthy evaluation of a callback.
// input -> [array], callback()
// output-> return [slice of original array]
const takeUntil = function(array, callback) {
  const results = [];
  //  iterates from beginning
  for (const item of array) {
    // callback evaluates a truthy --> true = toggles stop // break!
    if ((callback(item))) break;
    results.push(item);
  }
  return results;
};


module.exports = takeUntil;
