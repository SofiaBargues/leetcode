/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
    let set = new Set(s)
    let maxChar = ""
    for (char of s) {
        let lower = char.toLowerCase()
        let upper = char.toUpperCase()
        if (set.has(lower) && set.has(upper)) {
            if (maxChar < upper) maxChar = upper
        }
    }
    return maxChar
};