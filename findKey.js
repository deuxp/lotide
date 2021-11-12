// =================================================================
// Input:       (A) an object (B) a callback function
// Return:      'String' or undefined
// Behaviour:   Returns the first key for which the callback returns
//              a truthy value. If no key is found, it returns undefined.
// =================================================================
const findKey = function(object, callback) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const value = object[key];
      if (callback(value)) return key;
    }
  }
};


module.exports = findKey;