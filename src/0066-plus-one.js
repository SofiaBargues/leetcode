/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let index = digits.length - 1
    while (digits[index] === 9) {
        digits[index] = 0
        index = index - 1
    }
    if (index < 0) {
        digits.unshift(1)
    } else  {
        digits[index] = digits[index] + 1
    }
    return digits
};