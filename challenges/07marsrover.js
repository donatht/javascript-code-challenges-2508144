function rover(way) {
  // Write your code here
  let dir = 0; //0-oben 1-rechts, 2-unten, 3-links
  let x = 0
  let y = 0
  for (let step = 0; step < way.length; step++) {


    switch (way.charAt(step)) {
    case "r":
      dir = dir + 1
      if (dir > 3) {
        dir = dir - 4;
      }
      break;

    case "l":
      dir = dir - 1
      if (dir < 0) {
        dir = dir + 4;
      }
      break;

    case "f":
      switch (dir) {
      case 0:
        y = y + 1
        break;

      case 1:
        x = x + 1
        break;

      case 2:
        y = y - 1
        break;

      case 3:
        x = x - 1
        break;
      }
    }
  }
  return { x: x, y: y };
}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.deepEqual(rover('rffffr'), { x: 4, y: 0 });
    assert.deepEqual(rover('rfrfrfrfr'), { x: 0, y: 0 });
    assert.deepEqual(rover('ffrfrflflfrf'), { x: 3, y: 2 });
    assert.deepEqual(rover('rfffrfffrf'), { x: 2, y: -3 });
  });
});
