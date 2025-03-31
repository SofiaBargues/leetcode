/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let n = nums.length
    let seen = new Array(n).fill(false)
    for (let num of nums) {
        seen[num-1] = num
    }
    let result = []
    let i = 0
    while (i <= nums.length - 1) {
        if (seen[i] === false) result.push(i+1)
        i++
    }
    return result
};