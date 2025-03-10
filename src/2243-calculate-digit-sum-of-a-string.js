/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {

    while (s.length > k) {
        let result = []
        s = s.split("").map((x) => Number(x))
        for (let i = 0; i <= s.length - 1; i += k) {
            result.push(String(s.slice(i, i + k).reduce((acc, curr) => acc + curr, 0)))
        }
        s = result.join("")

    }
    return s
};