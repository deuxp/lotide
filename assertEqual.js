// ==================================
// assertEqual(arg1, arg2) is a function that determines whether 2 passed values are strictly equal.
// Return: undefined
// behaviour: logs the results to the console
// ==================================

const assertEqual = function(actual, expected) {
  const pass = `💎 💎 💎 Assertion Passed: ${actual} === ${expected}`;
  const notPass = `😵 😵‍💫 😬 Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(pass) : console.log(notPass);
  console.log('\n');
};


module.exports = assertEqual;