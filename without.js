
/*
Returns a new array of all the items not specified by itemToRemove arg.
*/
const without = function(source, itemsToRemove) {
  let arrayWithout = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    const itemToRemove = itemsToRemove[i];
    arrayWithout = arrayWithout.filter(item => item !== itemToRemove);
  }
  return arrayWithout;
};


module.exports = without;