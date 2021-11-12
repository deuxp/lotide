// =================================================================
// Input      ->  [source] -an array to be modified,
//                [itemsToRemove] -an array of unwanted items in the source array.
// Behaviour  ->  Returns a new array of all the items not specified by the 
//                itemToRemove arg. Original array is not affected
// =================================================================
const without = function(source, itemsToRemove) {
  let arrayWithout = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    const itemToRemove = itemsToRemove[i];
    // if item does not equal item to remove, keep it.
    arrayWithout = arrayWithout.filter(item => item !== itemToRemove);
  }
  return arrayWithout;
};


module.exports = without;