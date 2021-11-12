// ===================================
// Input  ->  an array of any length 
// Return ->  the first item in an array
//            passed as an argument
// ===================================
const head = function(array) {
  return array.slice(0, 1)[0];
};


module.exports = head;