const head = require('../head');

const assert = require('chai').assert;


describe('#head', () => {
  it('returns 1 from [1,2,3]', () => {
    assert.strictEqual(head([1,2,3]), 1);
  })
  it('returns 5 from [5,6,7]', () => {
    assert.strictEqual(head([5, 6, 7]), 5); // Pass
  })
  it('returns 5 from [5]', () => {
    assert.strictEqual(head([5]), 5); // Pass
  })
  it('returns undefined from []', () => {
    assert.strictEqual(head([]), undefined); // Pass
  })
  it("returns 'Hello' from ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); // Pass
  })
});