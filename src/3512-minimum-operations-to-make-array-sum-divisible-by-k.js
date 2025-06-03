
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let numsSum = nums.reduce((acc, curr) => acc + curr, 0)
    let operations = 0

    operations = numsSum % k
  

    return operations
};
