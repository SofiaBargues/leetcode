/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
    let set = new Set(nums)
    let max = Math.max(...nums)
    let min = Math.min(...nums)

    set.delete(max)
    set.delete(min)

    if (!set.size) return -1

    return [...set].pop()

};
// var findNonMinOrMax = function (nums) {
//     if (nums.length <= 2) {
//         return -1
//     } else {
//         nums.sort((a, b) => a - b)
//         return nums[1]
//     }
// };