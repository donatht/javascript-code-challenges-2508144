function redistributeWealth(wealth) {
  // Write your code here
  var sum = 0;
  if (Array.isArray(wealth)) {
    wealth.forEach(element => {
      sum = sum + element
    });
    var average = sum / wealth.length;
    let newWealth = [];
    for (let i = 0; i < wealth.length; i++) {
      newWealth[i] = average;
    }

    return newWealth;


  }

}


const { assert } = require('chai');
describe("Tests", function () {
  it("tests", () => {
    assert.deepEqual(redistributeWealth([3, 3, 3, 3]), [3, 3, 3, 3]);
    assert.deepEqual(redistributeWealth([1, 2, 3, 4]), [2.5, 2.5, 2.5, 2.5]);
    assert.deepEqual(redistributeWealth([1, 1, 5, 4, 9]), [4, 4, 4, 4, 4]);
    assert.deepEqual(redistributeWealth([3, 4, 5, 3, 7, 2, 3, 12, 15]), [6, 6, 6, 6, 6, 6, 6, 6, 6]);
  });
});
