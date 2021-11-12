// =================================================================
// countLetters(arg1) is a function that counts the letters of a string.
// Return: new Object
// Behaviour: The key/value pairs of the return object are comprised
//            of letters that appear in the sting and how many times
//            they appear.
// =================================================================
const countLetters = function(input) {
  const result = {};
  // primes the string: force lowerCase and removes whitespace
  input = input.replace(/\s/g, '').toLowerCase();
  for (const letter of input) {
    // checks if the property exists. Creates one if none is present or adds to the count
    result[letter] ? result[letter]++ : result[letter] = 1;
  }
  return result;
};

module.exports = countLetters;