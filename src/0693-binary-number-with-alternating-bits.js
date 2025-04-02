/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {

    let arr = n.toString(2)
    let last = "0"
    for (const char of arr) {
        if (char === last) return false
        last = last === "1" ? "0" : "1"
    }

    return true
};