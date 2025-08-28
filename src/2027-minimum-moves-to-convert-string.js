
/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
    let i = 0
    let total = 0
    for (i; i <= s.length - 1; i++) {
        if (s[i] === "X") {
            i += 2
            total++
        }
    }
    return total
};
