
/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
    let [lowStr, smallChar, highStr, bigChar] = x >= y ? ["ba", y, "ab", x] : ["ab", x, "ba", y]
    let stack = []
    let total = 0
    for (const char of s) {
        if (char === highStr[1] && stack[stack.length - 1] === highStr[0]) {
            stack.pop()
            total += bigChar
        } else stack.push(char)
    }

    s = stack.join("")
    stack = []
    for (const char of s) {
        if (char === lowStr[1] && stack[stack.length - 1] === lowStr[0]) {
            stack.pop()
            total += smallChar
        } else stack.push(char)
    }


    return total
};
