const flatten = function(input) {
  let subArray = [];

  input.forEach(item => {
    if (Array.isArray(item)) {
      subArray = subArray.concat(item);
    } else {
      subArray.push(item);
    }
  });
  return subArray;
};


module.exports = flatten;