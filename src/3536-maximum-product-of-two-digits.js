

/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
    let firstMax = 0
    let secondMax = 0
    let arr = String(n).split("").map((x) => Number(x))
    for (const char of arr) {
        if (char > firstMax) {
            secondMax = firstMax
            firstMax = char
        } else if (char > secondMax) {
            secondMax = char
            if (secondMax === 9) break
        }
    }

    return firstMax * secondMax
};








// /**
//  * @param {number} n
//  * @return {number}
//  */
// var maxProduct = function (n) {
//     let arr = String(n).split("").sort()
//     let l = arr.length
//     let [firstMax, secondMax] = arr.slice(l - 2, l)
//     return firstMax * secondMax
// };