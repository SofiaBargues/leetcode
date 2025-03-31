/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b)
    let l = nums.length - 1
    return Math.max(nums[0] * nums[1] * nums[l], nums[l] * nums[l - 1] * nums[l - 2])
}
