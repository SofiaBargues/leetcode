/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let total = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 != 0) {
      total++;
      if (total === 3) return true;
    } else {
      total = 0;
    }
  }
  return false;
};
