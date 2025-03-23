/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
    let n = grid.length
    for (let i = 0; i <= grid.length - 1; i++) {
        for (let j = 0; j <= grid[0].length - 1; j++) {
            if (i === j || i === n - j - 1) {
                if (grid[i][j] === 0) return false
            } else {
                if (grid[i][j] != 0) return false
            }
        }
    }
    return true
};