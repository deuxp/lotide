// =================================================================
// Input:       (A) an object (B) the value to check for
// Return:      'String' or undefined
// Behaviour:   Iterates through the key:value pairs and compares the values to the arg.
//              Returns the first key for which the value matches.
//              If no key is found, it returns undefined.
// =================================================================
const findKeyByValue = (obj, value) => {
  const entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i++) {
    const values = entries[i][1];
    const key = entries[i][0];
    if (values === value) return key;
  }
};


module.exports = findKeyByValue;