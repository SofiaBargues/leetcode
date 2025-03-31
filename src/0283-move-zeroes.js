/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = 0
    let j = 0
    while (j < nums.length) {
        if (nums[j] === 0) {
            j++
            continue
        }
        nums[i] = nums[j]
        i++
        j++

    }
    for (i; i <= nums.length - 1; i++) {
        nums[i] = 0
    }
    return nums
};