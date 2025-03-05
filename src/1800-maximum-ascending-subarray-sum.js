/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let partialSum = nums[0]; 
    let maxSum = nums[0]; 

    for (let i = 1; i < nums.length; i++) { 
        if (nums[i] > nums[i - 1]) {
            partialSum += nums[i]; 
        } else {
            maxSum = Math.max(maxSum, partialSum); 
            partialSum = nums[i]; 
        }
    }

    return Math.max(maxSum, partialSum); 
};

// var maxAscendingSum = function (nums) {
//     let partialSum = nums[0]
//     let maxSum = nums[0]
//     for (let i = 1; i <= nums.length - 1; i++) {
//         let num = nums[i]
//         let prev = nums[i - 1]
//         if (num > prev) {
//             console.log( partialSum , num)
//             partialSum = partialSum + num
//         } else {
//             maxSum = Math.max(maxSum, partialSum)
//             partialSum = num[i]
//         }

//     }
//     console.log(maxSum, partialSum)
//     return Math.max(maxSum, partialSum)
// }