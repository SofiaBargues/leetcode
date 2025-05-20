

/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {

    max = 0
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === nums[i - 2] && l >= 2) {
            l++
        } else if (nums[i] === nums[i - 1] + 1) {
            l = 2
        } else {
            l = 0
        }
        if (max < l) max = l
    }
    return max > 0 ? max : -1
};