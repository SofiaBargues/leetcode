/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    let maxDif = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        if (maxDif < (Math.abs(nums[i]- nums[(i + 1) % nums.length]))) {
            maxDif = Math.abs(nums[i] - nums[(i + 1) % nums.length])
        }

    }
    return maxDif
};