/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    n = nums.length
    let sumTotal = (n * (n + 1)) / 2
    let sumPartial = nums.reduce((acc, curr) => curr + acc, 0)

    return sumTotal- sumPartial
};