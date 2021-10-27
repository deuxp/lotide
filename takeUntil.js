// ==================================
// helper function --> for assertArraysEqual
// ==================================
const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};
// ==================================
// ***ASSERT ARRAYS ARE EQUAL***
// ==================================
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`💎💎💎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// ==================================
// takeUntil Function
// ==================================
/*
input -> [array], callback()
output-> return [slice of original array]
Whatdo->
  (a) iterates from beginning
  (b) until callback evaluates a truthy --> true = toggles stop // make it stop!
*/

const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if ((callback(item))) break;
    results.push(item);
  }
  return results;
};


const data = [1,3,6,3,8,46,1,76,89,99,110,120];
const data2 = ["Cause", "i'M", "hungry", "like", "the", "woooooolf", ".", "I", "like"];
const lessThanThirty = x => x > 30; // less than 30, all items up until..
const lt30 = takeUntil(data, lessThanThirty);
const hungryWolf = w => w === '.';
const hungryLikeThe = takeUntil(data2, hungryWolf);

assertArraysEqual(lt30, [1,3,6,3,8]);
assertArraysEqual(hungryLikeThe, ["Cause", "i'M", "hungry", "like", "the", "woooooolf"]);
