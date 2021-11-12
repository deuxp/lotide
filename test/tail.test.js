const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('returns[2,3,4], from [1,2,3,4]', () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3,4]);
  });

  it('returns [] from []', () => {
    assert.deepEqual(tail([]), []);
  });

  it('returns [] from [8]', () => {
    assert.deepEqual(tail([8]), []);
  });

  it('returns [] from "hello there"', () => {
    assert.deepEqual(tail('hello there'), []);
  });
});



// assertEqual(tail()[0], 2)
// assertEqual(tail([1,2,3,4])[1], 3)
// assertEqual(tail([1,2,3,4])[2], 4)
// assertEqual(tail([1,2,3,4])[3], undefined)
// assertEqual(tail([])[0], [][0])