// array equality
const assertArraysEqual = (actual, expected) => {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`💎💎💎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const middle = array => {
  const len = array.length;
  if (len < 3) return [];
  return len %  2 ? [array[Math.floor(len / 2)]] : [array[len / 2 - 1], array[len / 2]];
};


let a = [1,2,3,4,5,6]; // 3,4
let b = [1,2,3,4,5]; // 3
let c = [1,2,3,4,5,6,7,8,9]; // 5
let d = []; // []

assertArraysEqual(middle(a), [3, 4])
assertArraysEqual(middle(b), [3])
assertArraysEqual(middle(c), [5])
assertArraysEqual(middle(d), [])
