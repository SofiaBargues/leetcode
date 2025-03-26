/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
    let arrNum = String(num).split("")
    let replaceMax = 0
    for (let i = 0; i <= arrNum.length; i++) {
        let num = arrNum[i]
        if (num != "9") {
            replaceMax = i
            break
        }
    }
    let max = arrNum.map((x) => x === arrNum[replaceMax] ? x = "9" : x)
    let min = arrNum.map((x) => x === arrNum[0] ? x = "0" : x)
    return Number(max.join("")) - Number(min.join(""))
};