/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let totalSum = nums.slice(0,  k).reduce((acc, curr) => acc + curr, 0)
    let max = totalSum

    for (let i = k; i <= nums.length - 1; i++) {
    console.log(totalSum,nums[i-k],nums[k])
        totalSum=totalSum-nums[i-k]+nums[i]
        if (max < totalSum) max = totalSum
    console.log(max)
    }
    return max / k
};