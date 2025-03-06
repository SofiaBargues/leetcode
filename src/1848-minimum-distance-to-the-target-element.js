/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
    let left = start
    let rigth = start
    while (nums[left]!= target && nums[rigth] != target) {
        left = left - 1
        rigth = rigth + 1
    }
    return Math.abs(left - start)
};
// var getMinDistance = function (nums, target, start) {
//     let smallest = Infinity
//     //go througth nums 
//     for (let i = 0; i <= nums.length - 1; i++) {
//         let num = nums[i]
//         if (num === target) {
//             if (Math.abs(i - start) < smallest) {
//                 smallest=Math.abs(i-start)
//             }
//         }
//     }
//     return smallest
// };