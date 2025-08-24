/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
    for (let i = 0; i <= nums.length - 1; i++) {
        if (i % 10 == nums[i]) return i
    }
    return -1
};

