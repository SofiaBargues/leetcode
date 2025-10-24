
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    nums.sort((a, b) =>b -a)
    let smallest = Infinity
    for (let i = 0; i <= nums.length - k; i++) {
        let difference = nums[i]-nums[i + k-1]
        if (smallest > difference) smallest = difference
    }
    return smallest

};
