/* eslint-disable indent */
function isIban(iban) {
  // Write your code here
  const landStr = iban.substring(0, 2);//landerkürzel string
  const pz = iban.substring(2, 4);
  const blz = iban.substring(4, 12);
  const kn = iban.substring(12);
  console.log(landStr, pz, blz, kn);

  let landNr = ""; // länderkürzel als nummern
  for (let i = 0; i < landStr.length; i++) {
    var code = landStr.charCodeAt(i)
    if (code > 64 && code < 91) {
      landNr += (code - 64 + 9);
    }
    console.log(landNr);
  }

  let knMissingDigits = ""; //fehlende stellen in der Kontonummer
  for (let i = 0; i < 10 - kn.length; i++) {
    knMissingDigits += "0";
  }
  console.log(kn, knMissingDigits);

  const forCheck = parseInt(blz + knMissingDigits + kn + landNr + "00");
  console.log(forCheck);
  // funktioniert nicht bei großen Zahlen
  /*let candidate = (98 - (forCheck % 97)).toString();// funktioniert nicht bei großen Zahlen
  
  console.log(candidate);
  switch (candidate.length) {
    case 0:
      candidate = "00";
      break;
    case 1:
      candidate = "0"+candidate;
      break;
    case 2:
      break;
  }

  if (candidate == pz) {
    return true;
  } else {
    return false;
  }*/
  const rearranged = iban.substring(4, iban.length) + iban.substring(0, 4);
  const numeric = Array.from(rearranged).map(c => (isNaN(parseInt(c)) ? (c.charCodeAt(0) - 64 + 9).toString() : c)).join('');
  const remainder = Array.from(numeric).map(c => parseInt(c)).reduce((remainder, value) => (remainder * 10 + value) % 97, 0);

  return remainder === 1;

}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(isIban('DE02200505501015871393'), true);
    assert.equal(isIban('DE88100900001234567892'), true);
    assert.equal(isIban('AT026000000001349870'), true);
    assert.equal(isIban('AT022081500000698597'), true);
    assert.equal(isIban('CH0204835000626882001'), true);
    assert.equal(isIban('CH0200790016271403331'), true);
  });
});
