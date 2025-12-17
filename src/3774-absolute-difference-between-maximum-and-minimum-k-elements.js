/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function (nums, k) {
    //sort the arr
    nums.sort((a, b) => a - b)
    //sum fist k elemet 
    num1 = nums.slice(0, k).reduce((acc, curr) => acc + curr, 0)
    //sum last k elemet 
    num2 = nums.slice(nums.length - k, nums.length).reduce((acc, curr) => acc + curr, 0)

    //   return lastkSum-fisrtkSum

    return num2 - num1
};