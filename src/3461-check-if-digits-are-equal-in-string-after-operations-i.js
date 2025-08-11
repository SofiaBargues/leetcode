
/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
    let sArr = s.split("").map((x) => Number(x))
    let result = []

    while (sArr.length > 2) {
        for (let i = 1; i <= sArr.length - 1; i++) {
            let num1 = sArr[i - 1]
            let num2 = sArr[i]
            result.push((num1 + num2) % 10)
        }
        sArr = [...result]
        result = []
    }

    return sArr[0] === sArr[1] ? true : false
};
