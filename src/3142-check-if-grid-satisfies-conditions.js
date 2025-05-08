

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function (grid) {
    let n = grid.length
    let m = grid[0].length
    for (let row = 0; row < n ; row++) {
        for (let col = 0; col < m; col++) {
            if (row+1 < n) {
                if (grid[row][col] !== grid[row + 1][col]) return false
            }
            if (col+1 < m) {
                if (grid[row][col] === grid[row][col + 1]) return false
            }
        }
    }
    return true
};