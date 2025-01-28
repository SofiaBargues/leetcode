/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
    let result = 0
    let n = nums.length
    for (let i = 1; i <= nums.length; i++) {
        let num = nums[i-1]
        if (n % i == 0) {
            result = (num * num) + result
        }
    }
    return result
};