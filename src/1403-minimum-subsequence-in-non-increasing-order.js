/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    nums.sort((a, b) => b - a)
    let iniTotal = nums.reduce((acc, curr) => acc + curr, 0)
    let currTotal = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        let num = nums[i]
        iniTotal -= num
        currTotal += num

        if (currTotal > iniTotal) return nums.slice(0, i+1)
    }
};