// ========================================================================
// helper functions
// ========================================================================

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertEqual = (actual, expected) => {
  const isString = input => typeof input === "string";
  if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertion Failed: ${isString(actual) ? '"' + actual + '"' : actual} !== ${isString(expected) ? '"' + expected + '"' : expected}`);
  } else {
    console.log(`💎💎💎 Assertion Passed: ${isString(actual) ? '"' + actual + '"' : actual} === ${isString(expected) ? '"' + expected + '"' : expected}`);
  }
};


// ========================================================================
// the function: eqObjects()
// ========================================================================
/*
input -> object actual, object expected
paramPrep: compare four lists: keys for both and values for both

make two arrays of keys.
use the keys of the other in the others [] and compare
if no match pop it off return false

return make it to the end no error TRUE
output-> Boolean

*/
const eqObjects = (actual, expected) => {
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);

  if (actualKeys.length !== expectedKeys.length) return false;

  for (let i = 0; i < actualKeys.length; i++) {
    const key = actualKeys[i];

    if (actual[key] !== expected[key]) {
      if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
        if (eqArrays(actual[key], expected[key])) {
          continue;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};

// ========================================================================
// tests
// ========================================================================
let a1 = {a: 1, b: 2, c: 3};
let a2 = {a: 1, c: 3, b: 2};
let a3 = {a: 1, b: 2, c: '3'}; // fail

let a4 = {a: 1, b: 2, c: 3, d: 4};

let b1 = {};
let b2 = {};
let b3 = {a: []};
let b4 = {a: undefined};
let b5 = {a: 0};
let b6 = {a: null};

assertEqual(eqObjects(a1, a2), true);
assertEqual(eqObjects(a1, a3), false);
assertEqual(eqObjects(a1, a4), false);
assertEqual(eqObjects(b1, b2), true);
assertEqual(eqObjects(b3, b4), false);
assertEqual(eqObjects(b5, b6), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

