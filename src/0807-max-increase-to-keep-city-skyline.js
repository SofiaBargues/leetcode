/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let n = grid.length
    let maxR = new Array(n).fill(0)
    let maxC = new Array(n).fill(0)
    
    for (let r = 0; r <= grid.length - 1; r++) {
        for (let c = 0; c <= grid.length - 1; c++) {
            //val>maxC maxC=val 
            if (grid[r][c] > maxC[c]) maxC[c] = grid[r][c]
            if (grid[r][c] > maxR[r]) maxR[r] = grid[r][c]
        }
    }

    let total = 0

    for (let r = 0; r <= grid.length - 1; r++) {
        for (let c = 0; c <= grid.length - 1; c++) {
            let val = grid[r][c]
            // for each val 
            let maxHeight = Math.min(maxC[c], maxR[r])
            total += maxHeight - val
        }
    }

    return total
};