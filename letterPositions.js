// =================================================================
// Input ->   any String
// Output->   (a) object of letters[key] occuring in the string,
//            (b) array of index[value] positions of the letter[key]
// =================================================================
const letterPositions = function(input) {
  const result = {};
  // primes the input -- remove whitespace and force lowercase
  input = input.replace(/\s/g, '').toLowerCase();
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    if (result[letter]) {
      // pushes index to property
      result[letter].push(i);
    } else {
      // adds property and index if non-existent
      result[letter] = [i];
    }
  }
  return result;
};


module.exports = letterPositions;
