/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function (nums) {
  let set = new Set(nums);
  let total = nums.reduce((acc, curr) => curr + acc, 0);
  let aver = Math.floor(total / nums.length);
  let number = aver + 1;
  let result = Math.max(1, number);

  while (set.has(result)) {
    result++;
  }
  return result;
};
