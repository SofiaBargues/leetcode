/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
    let result = []
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] === key) {
            let start = Math.max(0, i - k, result[result.length - 1] ? result[result.length - 1] + 1 : 0)
            let end = Math.min(nums.length - 1, i + k)
            for (let index = start; index <= end; index++) {
                result.push(index)
            }
        }
    }
    return result
};