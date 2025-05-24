
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
    let acc = 0
    let set = new Set()
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] > 0 && !set.has(nums[i])) {
            set.add(nums[i])
            acc += nums[i]
        }
    }
    if (acc === 0 && nums.length >= 1) return Math.max(...nums)
    else return acc
};
