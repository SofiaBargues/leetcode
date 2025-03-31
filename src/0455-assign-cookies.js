/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

//   g = [1,2,3], s = [1,1]
// Output: 1
var findContentChildren = function (g, s) {
    s.sort((a, b) => a - b)
    g.sort((a, b) => a - b)
    let total = 0
    let i = 0
    let lg = g.length
    let j = 0
    let ls = s.length

    while (i < lg && j < ls) {
        if (g[i] === s[j] || g[i] < s[j]) {
            total = total + 1
            i = i + 1
            j = j + 1
        } else if (g[i] > s[j]) {
            j = j + 1
        }
    }
    return total
};