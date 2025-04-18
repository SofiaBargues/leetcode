/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
    function isEven(num) {
        if (num % 2 === 0) return true
        return false
    }
    let flag=isEven(nums[0])
    for (let i = 1; i <= nums.length - 1; i++) {
        if (flag=== isEven(nums[i])) return false
        flag=isEven(nums[i])
    }
    return true
};