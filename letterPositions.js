/*
input ->  string
output->  (a) object of letters[key] occuring in the string,
          (b) array of index[value] positions of the letter[key]
*/
const letterPositions = function(input) {
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


module.exports = letterPositions;
