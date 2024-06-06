/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  function swap(i, j) {
    [nums[j], nums[i]] = [nums[i], nums[j]];
  }
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] != 0) {
      swap(left, right);
      right++;
      left++;
    } else {
      right++;
    }
  }

  return nums;
};
