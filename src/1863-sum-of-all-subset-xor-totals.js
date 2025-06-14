/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let total = 0
    let n = nums.length
    for (const num of nums) {
        total = total | num
    }
    return total * 2**(n - 1)
};

