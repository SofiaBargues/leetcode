

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
    if (nums.length === 1) return 0
    let breakTimes = 0
    let index = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            breakTimes++
            index = i
        }
        if (i === nums.length - 1 && breakTimes === 0) {
            return 0
        }
    }
    if (nums[nums.length - 1] < nums[0] && breakTimes === 1) {
        return nums.length - index
    }
    return -1
};