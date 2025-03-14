/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num >= 10) {
    num = String(num)
      .split("")
      .map((x) => Number(x))
      .reduce((acc, curr) => acc + curr, 0);
  }
  return num;
};
