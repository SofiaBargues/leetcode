/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
    let beauty = 0
    let strNum = String(num)
    for (let i = 0; i <= strNum.length - k; i++) {
        let subStr = strNum.slice(i, i + k)
        if (num % Number(subStr) === 0) {
            console.log(subStr, num)
            beauty++
        }
    }

    return beauty
};