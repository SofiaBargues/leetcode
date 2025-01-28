
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    return Math.max(...nums)*k+(k-1)*(k)/2
};





// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var maximizeSum = function (nums, k) {
//     let score = 0
//     let m = Math.max(...nums)

//     while (k > 0) {
//         score = score + m
//         m = m + 1
//         k = k - 1
//     }
//     return score
// };