/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function (nums) {
    let total = nums[0]
    for (let i = 1; i <= nums.length - 1; i++) {
        if (i % 2 === 0) {
             total= nums[i] +total 
        } else {
             total=total-nums[i]
        }
    }

    return total
};

