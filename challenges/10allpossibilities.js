function isAllPossibilities(array) {
  // Write your code here
  for (let i = 0; i < array.length; i++) {
    if (array.sort()[i]!=i){
      return false;
    } 
  }
  return true;
}


const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(isAllPossibilities([0, 1, 2, 3, 4, 5]), true);
    assert.equal(isAllPossibilities([1, 2, 3, 4]), false);
    assert.equal(isAllPossibilities([0, 1, 3, 4]), false);
    assert.equal(isAllPossibilities([0, 1, 3, 2]), true);
  });
});