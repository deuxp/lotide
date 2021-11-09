const middle = require('../middle')
const assert = require('chai').assert;


let a = [1,2,3,4,5,6]; // 3,4     pass
let b = [1,2,3,4,5]; // 3         pass
let c = [1,2,3,4,5,6,7,8,9]; // 5 pass
let d = []; // []                 pass
let z = [1,2,3,'4',5,6]; // 3,'4' fail

// assertArraysEqual(middle(a), [3, 4])
// assertArraysEqual(middle(b), [3])
// assertArraysEqual(middle(c), [5])
// assertArraysEqual(middle(d), [])
// assertArraysEqual(middle(z), [3, 4])
describe('#middle', () => {
  it('returns [3,4] from [1,2,3,4,5,6]',  () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4])
  })
  it('returns [3] from [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3])
  })
  it('returns 0 from [1,1,1,0,1,1,1]', () => {
    assert.deepEqual(middle([1,1,1,0,1,1,1]), [0])
  })
  it('returns [] from []', () => {
    assert.deepEqual(middle([]), [])
  })
  it('returns [] if input is a string', () => {
    assert.deepEqual(middle('hello there'), [])
  })
  it('returns [] if input is a number', () => {
    assert.deepEqual(middle(3), [])
  })
  it('returns [] if input is undefined', () => {
    assert.deepEqual(middle(undefined), [])
  })
})