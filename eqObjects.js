/*
input -> object actual, object expected
paramPrep: compare four lists: keys for both and values for both

make two arrays of keys.
use the keys of the other in the others [] and compare
if no match pop it off return false

return make it to the end no error TRUE
output-> Boolean

*/
const eqObject = (actual, expected) => {
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);

  if (actualKeys.length !== expectedKeys.length) return false;

  for (let i = 0; i < actualKeys.length; i++) {
    const key = actualKeys[i];
    if (actual[key] !== expected[key]) return false;
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

assertEqual(eqObject(a1, a2), true);
assertEqual(eqObject(a1, a3), false);
assertEqual(eqObject(a1, a4), false);
assertEqual(eqObject(b1, b2), true);
assertEqual(eqObject(b3, b4), false);
assertEqual(eqObject(b5, b6), false);