/*
input -> string
init result object
-[] isLowerCase
-[] whitespace
loop for..of in string each letter
  if letter is in result[letter] - truthy
    then result[letter].push(string.indexOf(letter))
  else
    result[letter] = []
output-> (a) object of letters[key] occuring in the string ,
  (b) array of index[value] positions of the letter[key]
*/
const letterPositions = input => {
  const result = {};
  input = input.replace(/\s/g, '').toLowerCase();
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    if (result[letter]) {
      result[letter].push(i);
    } else {
      result[letter] = [i];
    }
  }
  return result;
};


const assertArraysEqual = (actual, expected) => {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`💎💎💎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertArraysEqual(letterPositions('arbour')['a'], [0]);
assertArraysEqual(letterPositions('arbour')['r'], [1, 5]);
assertArraysEqual(letterPositions('arbour')['b'], [2]);
assertArraysEqual(letterPositions('arbour')['o'], [3]);
assertArraysEqual(letterPositions('arbour')['u'], [4]);
