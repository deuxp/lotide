// /*
// input -> (a) collection of items(strings). **Object (b) what to count. **Array
// output -> return counts for everything input listed. ** new object
// */
const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (let item of  allItems) {
    if (itemsToCount[item]) {
      if (!(results[item])) results[item] = 0;
      results[item] += 1;
    }
  }
  return results;
};


module.exports = countOnly;
