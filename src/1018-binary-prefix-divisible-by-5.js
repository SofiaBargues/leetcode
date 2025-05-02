/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
    let result = []
    let partial = 0

    for (let i = 0; i <= nums.length - 1; i++) {
        partial <<= 1
        partial = (partial+ nums[i])%10
        result.push(partial === 5 || partial === 0)

    }
    return result
};

