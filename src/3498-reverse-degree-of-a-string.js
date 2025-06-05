
/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let sum = 0
    for (let i = 0; i <= s.length - 1; i++) {
        let char = s[i]
        let val = char.charCodeAt(0)
        let reversedIndex = 123 - val
        sum += (i + 1) * reversedIndex
    }
    return sum
};
