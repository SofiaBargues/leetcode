/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    s = s.toUpperCase().split("").filter((x) => x != "-")
    let result = []
    let acc = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (acc === k) {
            acc = 0
            result.push("-")
        }
        result.push(s[i])
        acc++
    }
    return result.reverse().join("")
};