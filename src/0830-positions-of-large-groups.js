/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
    let result = []
    let start = 0
    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] != s[i - 1]) start = i
        if (s[i] != s[i + 1]) {
            let end = i
            let l = end - start + 1
            if (l >= 3) result.push([start, end])
        }
    }
    return result
};