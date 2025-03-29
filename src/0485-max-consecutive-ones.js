/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxOnesLength = 0;
  let currLength = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === 1) currLength++;
    if (nums[i] === 0) {
      if (maxOnesLength < currLength) maxOnesLength = currLength;
      currLength = 0;
    }
  }
  return Math.max(maxOnesLength, currLength);
};
