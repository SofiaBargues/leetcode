

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
    let total = 0
    for (const curr of words) {
        if (s.startsWith(curr)) total++
    }
    return total
};