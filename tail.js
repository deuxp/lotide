// const assertEqual = (actual, expected) => {
//   if (actual !== expected) {
//     console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//     console.log(`💎💎💎 Assertion Passed: ${actual} === ${expected}`);
//   }
// };
/*  Criteria
===================================
===================================
-[x] array of 1; tail = []
-[x] empty array; tail = []
-[x] dont destroy original array
*/
const tail = array => {
  console.log(array.slice(1));
};

const words = [1, 2, 3, 4];
// const words = [1];
// const words = [];

tail(words);
// assertEqual(words.length, 4)