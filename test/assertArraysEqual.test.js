const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual([5, 6, 8, 9], [5, '6', 8, 9]); // Game Over
assertArraysEqual([1,2,3], [3,2,1]); // Game Over
assertArraysEqual([5, 6, 8, 9], [5, 6, 8, 9]); // pass
assertArraysEqual([], []); // pass
