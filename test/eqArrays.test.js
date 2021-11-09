const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArray')



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true) // => GAME OVER
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => PASS
assertEqual(eqArrays([''], [undefined]), false); // => PASS

assertEqual(eqArrays([1, 2, 3], [1, 3, 2]), false); // => PASS


assertEqual(eqArrays([], []), true); // => PASS