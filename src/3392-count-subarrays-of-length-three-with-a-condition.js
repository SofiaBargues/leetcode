/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
  let result = 0;
  for (i = 0; i <= nums.length - 3; i++) {
    if (nums[i] + nums[i + 2] === nums[i + 1] / 2) result++;
  }
  return result;
};
