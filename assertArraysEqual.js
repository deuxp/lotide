// ==================================
// helper function
// ==================================

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

// ==================================
// IMPLEMENTATION
// ==================================

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`💎💎💎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ==================================
// alternates 1
// ==================================
// const assertArraysEqual = (actual, expected) => {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log(`💎💎💎 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


// ==================================
// alternates 2
// ==================================
// const assertArraysEqual = (actual, expected) => {
//   let assertion = true;
//   if (actual.length !== expected.length) assertion = false;
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) assertion = false;
//   }
//   if (assertion) {
//     console.log(`💎💎💎 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };



let a = [5, 6, 8, 9]; let b = [5, '6', 8, 9];

assertArraysEqual(a, b);