/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let obj = {
    5: 0,
    10: 0,
    20: 0,
  };

  for (const bill of bills) {
    if (bill === 5) {
      obj[5]++;
    } else if (bill === 10) {
      if (obj[5] > 0) {
        obj[5]--;
        obj[10]++;
      } else {
        return false;
      }
    } else if (bill === 20) {
      if (obj[10] > 0 && obj[5] > 0) {
        obj[10]--;
        obj[5]--;
        obj[20]++;
      } else if (obj[5] >= 3) {
        obj[5] -= 3;
        obj[20]++;
      } else {
        return false;
      }
    }
  }
  return true;
};
