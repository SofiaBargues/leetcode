/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    let arrWords = text.split(" ")

    let result = []
    for (let i = 0; i <= arrWords.length - 3; i++) {
        let f = arrWords[i]
        let s = arrWords[i + 1]
        if (f === first && second === s) {

            result.push(arrWords[i + 2])
        }
    }
    return result
};