
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    let result = []
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] === nums[i + 1] && nums[i] != 0) {
            result.push(nums[i] * 2)
            i++
        } else if (nums[i] != 0) result.push(nums[i])
    }
    while (result.length < nums.length) result.push(0)
    return result
};
