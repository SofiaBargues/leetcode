/**
 * @param {number} num
 * @return {number}
 */

function digitSum(num) {
  return String(num)
    .split("")
    .map((x) => Number(x))
    .reduce((acc, curr) => acc + curr, 0);
}
var countEven = function (num) {
  result = 0;
  for (let i = 1; i <= num; i++) {
    if (digitSum(i) % 2 === 0) result++;
  }
  return result;
};
