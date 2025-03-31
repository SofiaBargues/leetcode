/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        if (s.length % i === 0) {
            let subArr = (s.slice(0, i))

            let l = subArr.length
            isTrue = true
            for (let j = 0; j <= s.length - 1; j = j + l) {
                if (s.slice(j, j + l) != subArr) isTrue = false
            }
            if (isTrue) return true
        }
    }
    return false
};