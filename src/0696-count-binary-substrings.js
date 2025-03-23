/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    let output = 0
    let ones = 0
    let zeros = 0
    let prev = s[0]
    for (const char of s) {
        if (char === "0") {
            if (prev === "1") zeros = 1
            else zeros++
        } else {
            if (prev === "0") ones = 1
            else ones++
        }
        prev = char
        if (char === "1" && ones <= zeros) {
            output++
        } else if (char === "0" && zeros <= ones) {
            output++
        }
    }

    return output
};