/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {

    let max = 0
    let acc = 1
    for (let i = 0; i <= nums.length - 1; i++) {
        let curr = nums[i]
        let next = nums[i + 1]
        if (curr < next) { acc++ }
        else {
            if (acc > max) max = acc
            acc = 1
        }
    }
    return max
};