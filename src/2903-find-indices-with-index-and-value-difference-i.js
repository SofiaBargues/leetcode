/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */

var findIndices = function (nums, indexDifference, valueDifference) {
    let n = nums.length


    for (let i = 0; i <= n - 1; i++) {
        for (let j = i; j <= n - 1; j++) {
            if (Math.abs(i - j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference) return [i, j]
        }
    }

    return [-1, -1]
};

