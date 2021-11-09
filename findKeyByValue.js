// /*
// input -> (a) object, (b) value
// output-> the first key of the value; else undefined if empty -- 'string'
// */
const findKeyByValue = (obj, value) => {
  const entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i++) {
    const values = entries[i][1];
    const key = entries[i][0];
    if (values === value) return key;
  }
};


module.exports = findKeyByValue;