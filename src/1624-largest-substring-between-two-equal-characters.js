/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let obj = {}
    let max = -1
    for (let i = 0; i <= s.length - 1; i++) {
        let char = s[i]
        if (!(char in obj)) {
            obj[char] = i
        } else {
            if (max < i-obj[char]-1) max = i-obj[char]-1
        }
    }
    return max
};