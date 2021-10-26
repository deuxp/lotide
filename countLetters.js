/*
input -> string
for each letter in string // use for..of
  if its in the result; letter +=1 // truthy
  else not in the result; letter =1
output-> count of each letter in string.. object.. result

-[] isLowerCase
-[] whitespace


*/
let a = 'hello deAr';

const countLetters = input => {
  const result = {};
  input = input.replace(/\s/g, '').toLowerCase();
  for (const letter of input) {
    result[letter] ? result[letter]++ : result[letter] = 1;
  }
  return result;
};
console.log(countLetters(a));
// ======================================================
// ======================================================
// tester used by assertEqual
// const isString = input => {
//   return typeof input === "string";
// };


/* custom assert function which will log a message to console */
const assertEqual = (actual, expected) => {
  const isString = input => typeof input === "string";
  if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertion Failed: ${isString(actual) ? '"' + actual + '"' : actual} !== ${isString(expected) ? '"' + expected + '"' : expected}`);
  } else {
    console.log(`💎💎💎 Assertion Passed: ${isString(actual) ? '"' + actual + '"' : actual} === ${isString(expected) ? '"' + expected + '"' : expected}`);
  }
};
// ======================================================
// ======================================================

// assertEqual(countLetters('Lighthouse in the house')['l'], 1)
// assertEqual(countLetters('Lighthouse in the house')['i'], 2)
// assertEqual(countLetters('Lighthouse in the house')['g'], 1)
// assertEqual(countLetters('Lighthouse in the house')['h'], 4)
// assertEqual(countLetters('Lighthouse in the house')['t'], 2)
// assertEqual(countLetters('Lighthouse in the house')['o'], 2)
// assertEqual(countLetters('Lighthouse in the house')['u'], 2)
// assertEqual(countLetters('Lighthouse in the house')['s'], 2)
// assertEqual(countLetters('Lighthouse in the house')['e'], 3)
// assertEqual(countLetters('Lighthouse in the house')['n'], 1)

assertEqual(countLetters('hello deAr')['h'], 1);
assertEqual(countLetters('hello deAr')['e'], 2);
assertEqual(countLetters('hello deAr')['l'], 2);
assertEqual(countLetters('hello deAr')['o'], 1);
assertEqual(countLetters('hello deAr')['d'], 1);
assertEqual(countLetters('hello deAr')['a'], 1);
assertEqual(countLetters('hello deAr')['r'], 1);
