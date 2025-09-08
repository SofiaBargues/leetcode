/**
 * @param {number} n
 * @return {number[]}
 */

function isNonZeroIntegers(num) {
    return !(String(num).indexOf("0") != -1)
}

var getNoZeroIntegers = function (n) {
    for (let i = 1; i <= n; i++) {

        let a = n - i
        let b = i
        if (isNonZeroIntegers(a) && isNonZeroIntegers(b)) {
            return [a, b]
        }
    }
};
