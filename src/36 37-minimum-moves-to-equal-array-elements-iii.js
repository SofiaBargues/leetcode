/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let bigNum = Math.max(...nums)
    let res = 0
    for (const num of nums) res = res + (bigNum - num)
    return res
};