/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let counts = new Array(nums.length).fill(0)
    for (const num of nums) {
        counts[num - 1]++
    }
    let first = 0
    let second = 0
    for (let i = 0; i <= counts.length - 1; i++) {
        if (counts[i] === 0) second = i + 1
        else if (counts[i] === 2) { first = i + 1 }
    }
    return [first, second]
};

