const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💎💎💎 Assertion Passed: ${actual} === ${expected}`);
  }
};


const eqArrays = (array1, array2) => {
  let equality = 0;

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        equality++;
      }
    }
  }
  return equality * 2 === array1.length + array2.length;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true) // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
assertEqual(eqArrays([''], [undefined]), true); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS