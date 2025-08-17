

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let result = ""
    let numStr = String(num)
    let change = true
    for (const char of numStr) {
        if (change && char === "6") {
            result += "9"
            change = false
        } else {
            result += char
        }
    }
    return Number(result)

};



// /**
//  * @param {number} num
//  * @return {number}
//  */
// var maximum69Number = function (num) {
//     let numeros = String(num).split("")
//     for (let i = 0; i <= numeros.length - 1; i++) {
//         if (numeros[i] === "6") {
//             numeros[i] = "9"
//             return Number(numeros.join(""))
//         }
//     }
//     return num
// };