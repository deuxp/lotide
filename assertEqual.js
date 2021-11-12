// =================================================================
// Input      ->  [actual]    -a Primitive value to test, 
//                [expected]  -a Primitive value to test against
// Return     ->  undefined
// Behaviour  ->  Compares the 2 arrays for strict equality,
//                logs the results to the console
// =================================================================
const assertEqual = function(actual, expected) {
  const pass = `💎 💎 💎 Assertion Passed: ${actual} === ${expected}`;
  const notPass = `😵 😵‍💫 😬 Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(pass) : console.log(notPass);
  console.log('\n');
};


module.exports = assertEqual;