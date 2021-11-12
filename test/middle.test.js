const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it('returns [3,4] from [1,2,3,4,5,6]',  () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
  it('returns [3] from [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  it('returns 0 from [1,1,1,0,1,1,1]', () => {
    assert.deepEqual(middle([1,1,1,0,1,1,1]), [0]);
  });
  it('returns [] from []', () => {
    assert.deepEqual(middle([]), []);
  });
  it('returns [] if input is a string', () => {
    assert.deepEqual(middle('hello there'), []);
  });
  it('returns [] if input is a number', () => {
    assert.deepEqual(middle(3), []);
  });
  it('returns [] if input is undefined', () => {
    assert.deepEqual(middle(undefined), []);
  });
});