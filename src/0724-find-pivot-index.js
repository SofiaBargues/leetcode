/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let total = nums.reduce((acc, curr) => curr + acc, 0)
    let left = 0


    for (let i = 0; i <= nums.length - 1; i++) {
        let num = nums[i]
        let right = total - num - left
        if (right === left) return i
        else left += num
    }
    return -1

};