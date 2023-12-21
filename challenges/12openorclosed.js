function isOpen(timestamp) {
  // Write your code here
  const weekDay = new Date(timestamp).getDay();
  const hour = new Date(timestamp).getHours();
  console.log(weekDay, hour)
  if ((((weekDay == 1) || (weekDay == 2) || (weekDay == 4) || (weekDay == 5)) && ((hour >= 8 && hour <= 12) || (hour >= 14 && hour <= 18))) || ((weekDay == 3) && (hour >= 8 && hour <= 12)) || ((weekDay == 6) && (hour >= 8 && hour <= 13))) {
    return true;
  } else {
    return false;
  }
}


const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(isOpen('2026-7-14 09:00'), true); // Tuesday
    assert.equal(isOpen('2026-7-14 16:00'), true); // Tuesday
    assert.equal(isOpen('2026-7-15 10:00'), true); // Wednesday
    assert.equal(isOpen('2026-7-15 16:00'), false); // Wednesday
    assert.equal(isOpen('2026-7-18 14:00'), false); // Saturday
    assert.equal(isOpen('2026-7-19 09:00'), false); // Sunday

  });
});
