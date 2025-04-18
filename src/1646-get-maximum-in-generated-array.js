/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
    let nums = new Array(n + 1).fill(0)
    nums[0] = 0
    nums[1] = 1
    for (i = 1; i <= Math.floor(n / 2); i++) {
        nums[2 * i] = nums[i]
        nums[2 * i + 1] = nums[i] + nums[i + 1]
    }
    if (n % 2 === 0) nums.pop()
    // console.log(nums)
    return Math.max(...nums)
    //  return 0
};