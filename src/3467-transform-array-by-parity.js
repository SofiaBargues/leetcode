

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
    let zeros = 0
    let ones = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] % 2 === 0) {
            zeros++
        } else {
            ones++
        }
    }
    let result = []
    while (zeros > 0) {
        result.push(0)
        zeros--
    }
    while (ones > 0) {
        result.push(1)
        ones--
    }

    return result
};