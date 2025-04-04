/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {

    let odd = []
    let even = []
    let numArr = String(num).split("").map((x) => Number(x))
    for (const currNum of numArr) {
        if (currNum % 2 === 0) {
            even.push(currNum)
        } else { odd.push(currNum) }
    }
    odd.sort((a, b) => b - a)
    even.sort((a, b) => b - a)
    let result = []
    for (let i = numArr.length - 1; i >= 0; i--) {
        if (numArr[i] % 2 === 0) {
            result.push(even.pop())
        } else {
            result.push(odd.pop())
        }
    }
    return Number(result.reverse().map((x) => String(x)).join(""))
}
