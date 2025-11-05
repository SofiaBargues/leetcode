/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function (nums) {
    let result = 0
    let numsArr = nums.filter((x) => (x % 2) === 0)
    if (numsArr.length > 0) {
        result = numsArr.reduce((acc, curr) => curr | acc, 0)

    }
    return result
};