/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function (n) {
    let s = n.toString(2)

    let reverseS = s.split("").reverse().join("")
    let result = 0

    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] != reverseS[i]) result++
    }
    return result
};