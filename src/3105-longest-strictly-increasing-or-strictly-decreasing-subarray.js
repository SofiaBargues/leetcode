/**
 * @param {number[]} nums
 * @return {number}
 */


var longestMonotonicSubarray = function (nums) {
    let preSum = 0
    let max = 1
    let dirPrev = "none"
    for (let i = 0; i <= nums.length - 2; i++) {
        let dir = nums[1 + i] - nums[i] >= 1 ? "inc" : nums[1 + i] - nums[i] < 0 ? "dec" : "none"
        if (dir === "none") {
            preSum = 0
        } else if (dir === dirPrev) {
            preSum += 1
        } else preSum = 2

        //guardo dir
        dirPrev = dir
        if (max < preSum) max = preSum
    }
    return max
};


// var longestMonotonicSubarray = function (nums) {
//     let max = 1
//     let inc = 1
//     let dec = 1
//     for (let i = 0; i <= nums.length - 2; i++) {
//         if (nums[i + 1] > nums[i]) {
//             inc += 1
//             dec = 1
//         } else if (nums[i + 1] < nums[i]) {
//             dec += 1
//             inc = 1
//         } else {
//             inc = 1
//             dec = 1
//         }
//         max = Math.max(max, dec, inc)
//     }
//     return max
// };


