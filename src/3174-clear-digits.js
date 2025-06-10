
/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let sArr = s.split("")
    let result = []
    let l = s.length
    for (let i = 0; i <= l - 1; i++) {
        if (!(Number.isInteger(Number(sArr[i])))) result.push(sArr[i])
        else result.pop()
    }
    return result.join("")
};
