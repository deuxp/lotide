
// ====================================
// findKey function:
// ====================================
/*
input -> (a) object, (b) callback[function]
output-> return (a) the first key that [String]
                (b) callback returns truthy
Whatdo-> return the first key for which the callback returns a truthy value
Else  -> if no key is found return undefined --> return nothing
*/
const findKey = function(object, callback) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const value = object[key];
      if (callback(value)) return key;
    }
  }
};


module.exports = findKey;