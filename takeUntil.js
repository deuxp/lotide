// ==================================
// takeUntil Function
// ==================================
/*
retruns a new array, from the beginning up to an item that evaluates to true,
based on the evaluation of a callback.
input -> [array], callback()
output-> return [slice of original array]
Whatdo->
  (a) iterates from beginning
  (b) until callback evaluates a truthy --> true = toggles stop // make it stop!
*/
const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if ((callback(item))) break;
    results.push(item);
  }
  return results;
};


module.exports = takeUntil;
