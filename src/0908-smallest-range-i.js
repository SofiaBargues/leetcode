/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let max = -Infinity
    let min = Infinity
    
    for (const num of nums) {
        if (num > max) max = num
        if (num < min) min = num
    }
    
    let reducedRange = (max - min) - 2 * k
    
    return Math.max(reducedRange, 0)
};

