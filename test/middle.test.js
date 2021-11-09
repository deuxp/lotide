const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')

let a = [1,2,3,4,5,6]; // 3,4     pass
let b = [1,2,3,4,5]; // 3         pass
let c = [1,2,3,4,5,6,7,8,9]; // 5 pass
let d = []; // []                 pass
let z = [1,2,3,'4',5,6]; // 3,'4' fail

assertArraysEqual(middle(a), [3, 4])
assertArraysEqual(middle(b), [3])
assertArraysEqual(middle(c), [5])
assertArraysEqual(middle(d), [])
assertArraysEqual(middle(z), [3, 4])
