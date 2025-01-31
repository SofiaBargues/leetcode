/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
    let arr = new Array(n)
    arr = arr.fill("a")
    if (n % 2 != 0) return arr.join("");
    arr[0] = "b"
    return arr.join("")
};