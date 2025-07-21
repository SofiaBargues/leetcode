

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function (nums) {
    let result = new Array(nums.length).fill(0)

    for (let i = 0; i <= nums.length - 1; i++) {
        let curr = nums[i]
        if (curr === 0) result[i] = curr
        else if (curr > 0) {
            result[i] = nums[(i + curr) % nums.length]
        }
        else if (curr < 0) {
            result[i] = nums[((i + curr) % nums.length + nums.length) % nums.length]
        }
    }
    return result
};