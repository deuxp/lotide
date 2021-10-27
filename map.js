// ==================================
// helper function -- eqArray
// ==================================

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

// ==================================
// ASSERT ARRAYS ARE EQUAL
// ==================================

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`💎💎💎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// ==================================
// Map Function
// ==================================

/*
input -> (a) array to map (b) a callback function
output-> return a new array based on the results of the callback function

[x] 2 params
[x] init newarray
[x] use for..of the [array]
[x] the iter of the array is (a) passed to the param for the func() and then (b) pushed to the new array
[x] return new array

*/

const map = function(array, callback) {
  let result = [];

  for (const item of array) {
    result.push(callback(item));
  }
  return result;
};



const words = ["you", "spin", "me", "right", "round", 'baby', 'right', "round"];
const firstLetter = word => word[0]; // callback lifted out
const result1 = map(words, firstLetter);

console.log(result1);
assertArraysEqual(map(words, firstLetter), ['y', 's', 'm', 'r', 'r', 'b', 'r', 'r']);