/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
    let acc = 1
    let score = nums[0] + nums[1]
    let l = nums.length
    let end = l % 2 === 0 ? 2 : 3
    for (let i = 2; i <= l - end; i += 2) {
        if (nums[i] + nums[i + 1] === score) acc++
        else return acc
    }
    return acc
};