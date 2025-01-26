/**
 * @param {number[]} nums
 * @return {number}
 */

var subarraySum = function (nums) {
    const prefix = [0];
    let sum = 0;
    let preSum = 0
    let n = nums.length

    for (let i = 0; i <= nums.length-1; i++) {
        sum += nums[i]; // Suma acumulada
        prefix.push(sum); // Agrega la suma al prefixado

        let start = Math.max(0, i - nums[i])
        let end = i + 1
        preSum = preSum + (prefix[end]-prefix[start])
    }
    return preSum
};