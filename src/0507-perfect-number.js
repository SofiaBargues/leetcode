/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num == 1) return false;
  let acc = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      acc += i;
      acc += num / i;
    }
  }
  return acc === num;
};
