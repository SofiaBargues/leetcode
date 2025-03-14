/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  return String(n)
    .split("")
    .map((x, index) => (index % 2 === 0 ? Number(x) : -Number(x)))
    .reduce((acc, curr) => acc + curr, 0);
};
