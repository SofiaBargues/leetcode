/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
    let n = grid.length
    let m = grid[0].length
    let colZero = new Array(m).fill(0)
    let rowZero = new Array(n).fill(0)
    let colOne = new Array(m).fill(0)
    let rowOne = new Array(n).fill(0)
    for (let i = 0; i <= n - 1; i++) {
        for (let j = 0; j <= m - 1; j++) {
            if (grid[i][j] === 0) {
                colZero[j]++
                rowZero[i]++
            } else {
                colOne[j]++
                rowOne[i]++
            }
        }
    }
    let result = [...grid]
    for (let i = 0; i <= n - 1; i++) {
        for (let j = 0; j <= m - 1; j++) {
            result[i][j] = rowOne[i] + colOne[j] - rowZero[i] - colZero[j]
        }
    }

    return result
};

