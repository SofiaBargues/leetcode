/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {

    let maxTotal = 1
    let total = 1
    for (let i = 0; i <= s.length - 1; i++) {
        let char = s[i]
        let nextChar = s[i + 1]
        if (char === nextChar) {
            // console.log(char, nextChar)
            total++
            if (total > maxTotal) maxTotal = total
        } else {
            total = 1
        }
    }
    return maxTotal
};