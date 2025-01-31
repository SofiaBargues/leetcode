/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    nums.sort((a, b) => a - b)
    // find the smallest = 2
    let smallest = nums[0]
    let divisor = nums[0]
    if (smallest === 1) return 1
    // finde the largest = 10
    let largest = nums[nums.length - 1]
    if (smallest === largest) return largest
    while (divisor > 1) {
        console.log(divisor, smallest,largest)
        if ((smallest % divisor === 0) && (largest % divisor === 0)) {
            return divisor
        }
        divisor--
    }
    return 1
};