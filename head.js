
const head = function(array) {
  if (!(array)) {
    return [];
  }
  return array.slice(0, 1)[0];
};


module.exports = head;