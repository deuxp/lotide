const without = (source, itemsToRemove) => {
  let arrayWithout = source;

  for (let i = 0; i < itemsToRemove.length; i++) {
    const itemToRemove = itemsToRemove[i];
    arrayWithout = arrayWithout.filter(item => item !== itemToRemove);
  }
  return arrayWithout;
};


// let a = [1, 2, 3, 4, 5, 6, 7];
// let b = [5, 6, 7];

// console.log(without(a, b));
// console.log(a);