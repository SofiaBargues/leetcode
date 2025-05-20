

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
    let prefix = nums[0]
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === nums[i + 1] - 1) {
            prefix += nums[i + 1]
        }else {
        break
        }
    }
    let setNums = new Set(nums)

    while (setNums.has(prefix)) {
        prefix++
    }
    return prefix
};