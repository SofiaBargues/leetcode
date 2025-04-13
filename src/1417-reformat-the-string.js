/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    let letters = []
    let digits = []
    for (const char of s) {
        if (Number.isInteger(Number(char))) digits.push(char)
        else letters.push(char)
    }
    let lettersL = letters.length
    let digitsL = digits.length

    let result = []
    let letterTurn = letters.length > digits.length
    if (Math.abs(lettersL - digitsL) > 1) return ""
    while (letters.length > 0 || digits.length > 0) {
        if (letterTurn) {
            result.push(letters.pop())
        } else {
            result.push(digits.pop())
        }
        letterTurn = !letterTurn
    }
    return result.join("")
};