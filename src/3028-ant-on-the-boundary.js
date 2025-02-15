/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
    let ant = 0
    let result = 0
    for (const num of nums) {
        ant = ant + num
        if (ant === 0) result++
    }
    return result
};