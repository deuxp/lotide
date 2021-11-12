// =================================================================
// countOnly(arg1, arg2) is a function that counts the specified items from an array.
// Parameters: (A) an array of items (B) an object of truthy values
//             that validate the items from parameter A.
// Return:     new Object
// Behaviour:  The key from parameter B has a truthy value. If true
//             and the key matches an item from parameter A,
//             this returns an object of the items counted.
// =================================================================
const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (let item of  allItems) {
    if (itemsToCount[item]) {
      // if property of the item does not exist one is made
      if (!(results[item])) results[item] = 0;
      // property is counted
      results[item] += 1;
    }
  }
  return results;
};


module.exports = countOnly;
