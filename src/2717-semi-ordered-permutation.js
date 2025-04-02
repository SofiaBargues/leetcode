/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {

    let indexMax = nums.indexOf(Math.max(...nums))
    let indexMin = nums.indexOf(Math.min(...nums))
    let total = nums.length - 1 - indexMax + indexMin
    if (indexMax < indexMin) { return total - 1 }
    return total
};