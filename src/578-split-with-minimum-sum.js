/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
    let arrStr = String(num).split("").sort((a, b) => a - b)
    let num1 = []
    let num2 = []
    for (let i = 0; i <= arrStr.length - 1; i++) {
        if (i % 2 === 0) num1.push(arrStr[i])
        else num2.push(arrStr[i])
    }
    return Number(num1.join("")) + Number(num2.join(""))
};






































































// /**
//  * @param {number} num
//  * @return {number}
//  */
// var splitNum = function (num) {
//     let arrNum = String(num).split("").sort((a, b) => a - b)
//     let num1 = []
//     let num2 = []
//     for (let i = 0; i <= arrNum.length - 1; i++) {
//         if (i % 2 === 0) num1.push(arrNum[i])
//         else num2.push(arrNum[i])
//     }

//     return Number(num1.join(""))+ Number(num2.join(""))
// };

