/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function (grid) {

    for (let r = 0; r <= 1; r++) {
        for (let c = 0; c <= 1; c++) {
            let total = 0
            if (grid[r][c + 1] === "B") total++
            if (grid[r + 1][c + 1] === "B") total++
            if (grid[r][c] === "B") total++
            if (grid[r + 1][c] === "B") total++
            if (total === 1 || total == 3 || total === 4 || total === 0) return true
        }
    }
    return false
};