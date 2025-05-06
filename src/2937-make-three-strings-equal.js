

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
    // while son todos iguales i++
    let i = 0
    while (i < s1.length && s1[i] === s2[i] && s3[i] === s2[i]) {
        i++
    }
    return i === 0 ? -1 : (s1.length - i) + (s2.length - i) + (s3.length - i)
};