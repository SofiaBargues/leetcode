/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let arr = []
    while (n >= 0) {
        arr.unshift(n.toString(2).split("").filter((x) => x === "1").length)
        n--
    }

    return arr
};