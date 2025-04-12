/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
    let str = String(n) + String(2 * n) + String(3 * n)
    let arrStr = str.slice("")
    if (arrStr.length > 9 || arrStr.length < 9) return false
    let numbers = new Set()
    for (let char of arrStr) {
        if (char === "0") return false
        if (numbers.has(char)) return false
        numbers.add(char)

    }
    return true
};