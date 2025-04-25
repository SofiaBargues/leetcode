/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
    let acc = 0
    for (const num of number) {
        if (num === digit) acc++
    }

    if (acc === 1) {
        let result = ""
        for (const num of number) {
            if (num != digit) result = result + num
        }

        return result
    } else {
        let lastDigitIndex = 0
        for (let i = 0; i <= number.length - 1; i++) {
            let num = number[i]
            if (num === digit) lastDigitIndex = i
            if (num < number[i + 1] && num === digit) {
                return number.slice(0, i) + number.slice(i + 1)
            }
        }
        return number.slice(0, lastDigitIndex) + number.slice(lastDigitIndex + 1)
    }
};