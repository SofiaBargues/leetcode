/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let evenNums = nums.filter((x) => x % 2 === 0 && x % 3 === 0);

  if (evenNums.length === 0) return 0;
  let sum = evenNums.reduce((acc, curr) => acc + curr, 0);
  return Math.floor(sum / evenNums.length);
};
