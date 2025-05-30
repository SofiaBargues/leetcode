/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    let obj = {}

    for (const char of s) {
        if (char in obj) obj[char]++
        else obj[char] = 1
    }
    for (const char of t) {
        if (char in obj && obj[char] > 0) obj[char]--
    }
    return Object.values(obj).reduce((acc, curr) => acc + curr, 0)
};

