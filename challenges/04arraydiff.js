function arrayDiff(a, b) {
  // Write your code here
  if (a.length < b.length) {
    [a, b] = [b, a]
  }
  b.forEach(element => {
    if (a.includes(element)) {
      let index = a.findIndex(e => e == element);
      a.splice(index, 1);
    }
  });
  return a


}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.deepEqual(arrayDiff([1, 2], [1]), [2]);
    assert.deepEqual(arrayDiff([1, 2, 3], [1]), [2, 3]);
    assert.deepEqual(arrayDiff([1, 2, 3], [2, 3]), [1]);
    assert.deepEqual(arrayDiff([1, 2, 3, 4], []), [1, 2, 3, 4]);
  });
});
