
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    //base
    if (n <= 0) return false
    if (n === 1) return true

    //rec
    if (n % 3 === 0) {
        return isPowerOfThree(n / 3)
    } else return false
};




























// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfThree = function (n) {
//     //base
//     if (n === 1) {
//         return true
//     }
//     if (n % 3 !== 0 || n <= 0) {
//         return false
//     }
//     //recursion
//     return (isPowerOfThree(n / 3))
// };
