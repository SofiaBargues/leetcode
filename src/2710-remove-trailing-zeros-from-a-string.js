/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
    for (i = num.length - 1; i >= 0; i--) {
        if (num[i] != "0") {
            return num.slice(0,i+1)
        }
    }
};
// var removeTrailingZeros = function (num) {
//     let n = num.length
//     let numArr = num.split("")
//     while (numArr[n - 1] === "0") n--
//     return num.slice(0, n)
// };