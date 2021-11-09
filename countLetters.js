/*
input -> string
output-> an object with the letters and their count
*/
const countLetters = input => {
  const result = {};
  input = input.replace(/\s/g, '').toLowerCase();
  for (const letter of input) {
    result[letter] ? result[letter]++ : result[letter] = 1;
  }
  return result;
};

module.exports = countLetters;