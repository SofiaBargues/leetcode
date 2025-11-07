/**
 * @param {number[]} nums
 * @return {boolean}
 */

var hasTrailingZeros = function (nums) {
    let even = 0
    for (const num of nums) {
        if (even == 2) return true
        else if (num % 2 === 0) even++
    }

    return even == 2
};