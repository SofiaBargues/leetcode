/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function (nums) {
    let k = 0
    let seen = []
    let ans = []

    for (let num of nums) {
        if (num != -1) {
            seen.unshift(num)
            k = 0
        }
        if (num === -1) {
            k++
            if (k <= seen.length) ans.push(seen[k - 1])
            else ans.push(-1)
        }
    }
    return ans
};