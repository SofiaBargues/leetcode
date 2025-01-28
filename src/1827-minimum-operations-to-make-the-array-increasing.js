/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let result = 0
    for (i = 0; i <= nums.length - 2; i++) {
        let num = nums[i]
        let nextNum = nums[i + 1]
        console.log("for",num, nextNum)
        if (num >= nextNum) {
            result = result + num + 1 - nextNum
            nums[i+1] = num + 1
        console.log("if",result, nextNum)
        }
    }
    return result
};