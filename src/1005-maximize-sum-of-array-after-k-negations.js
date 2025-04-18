/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    // sort the array 
    nums.sort((a, b) => a - b)

    for (let i = 0; i <= nums.length - 1; i++) {
        if (k === 0) break

        if (nums[i] < 0) {
            nums[i] = -nums[i]
            k--
        } else {
            break
        }

    }

    if (k % 2 === 1) {
        nums.sort((a, b) => a - b)
        // console.log(nums)
        nums[0] = - nums[0]
    }

    return nums.reduce((acc, curr) => acc + curr, 0)
    // return 4


};