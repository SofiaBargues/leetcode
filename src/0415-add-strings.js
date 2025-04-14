/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let arrNum1 = num1.split("")
    let arrNum2 = num2.split("")
    //recorro los dos nums de atras para delante 
    // hasta recorrer los dos arrays entros y carry===0 
    let i = 0
    let carry = 0
    let result = []
    let max = Math.max(num1.length, num2.length)
    while (i < max || carry > 0) {
        //sumo los dos nums + carry
        let one = Number(num1[num1.length - i -1 ] )|| 0
        let two = Number(num2[num2.length - i -1 ]) || 0
        let totalSum = one + two + carry
        //aregego a result el resto de totalsum
        result.push(totalSum % 10)
        //actualizo carry con total.sum/10
        carry = Math.floor(totalSum / 10)
        i++
    }
    return result.reverse().join("")
};