
/* custom assert function which will log a message to console */

const assertEqual = function(actual, expected) {
  const pass = `💎 💎 💎 Assertion Passed: ${actual} === ${expected}`;
  const notPass = `😵 😵‍💫 😬 Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(pass) : console.log(notPass);
  console.log('\n');
};


module.exports = assertEqual;