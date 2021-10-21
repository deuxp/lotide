
// array equality
const assertArraysEqual = (array1, array2) => {
  let equality = 0;

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        equality++;
      }
    }
  }
  if (equality * 2 === array1.length + array2.length) {
    console.log(`💎💎💎 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${array1} !== ${array2}`);
  }
};


let a = [undefined]; let b = []

assertArraysEqual(a, b)
console.log(a);