/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
    let half = Math.floor(n / 2) - 1
    let totalSquares = 0
    for (let i = 0; i <= half; i++) {
        totalSquares += n - ((i * 2) + 1)
    }
    return totalSquares

};

