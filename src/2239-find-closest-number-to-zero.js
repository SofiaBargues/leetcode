/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    let minDist = [Infinity, Infinity]
    for (let i = 0; i <= nums.length; i++) {
        if (Math.abs(nums[i]) < minDist[1]) minDist = [nums[i], Math.abs(nums[i])]
        else if (Math.abs(nums[i]) === minDist[1]) minDist = [Math.max(nums[i], minDist[0]), Math.abs(nums[i])]
    }
    return minDist[0]
};