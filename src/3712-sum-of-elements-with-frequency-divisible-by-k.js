/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function (nums, k) {
    let obj = {}
    for (const num of nums) {
        if (obj[num]) obj[num]++
        else obj[num] = 1
    }

    let total = 0
    for (const num of nums) {
        if ((obj[num] % k) === 0) total += num
    }

return total
};
