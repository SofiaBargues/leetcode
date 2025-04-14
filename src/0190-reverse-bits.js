
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let binary = n.toString(2)
    let bitsArr = binary.split("").reverse()
    while (bitsArr.length < 32) {
        bitsArr.push("0")
    }
    return parseInt(bitsArr.join(""), "2")
};