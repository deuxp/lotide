
/*  Criteria
===================================
===================================
-[x] array of 1; tail = []
-[x] empty array; tail = []
-[x] dont destroy original array
*/
const tail = array => {
  if (!(array) || array.length === 1 || !(Array.isArray(array))) {
    return [];
  }
  return array.slice(1);
};

module.exports = tail;

console.log();