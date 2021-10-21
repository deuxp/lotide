const flatten = input => {
  let subArray = new Array;

  input.forEach(item => {
    if (Array.isArray(item)) {
      subArray = subArray.concat(item);
    } else {
      subArray.push(item);
    }
  });

  console.log(subArray);
};


// flatten([1, 2, [3, 4], 5, [6], [8, 9, 10], 11, 12]); // => [1, 2, 3, 4, 5, 6]