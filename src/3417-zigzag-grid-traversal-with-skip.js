/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function (grid) {
    let result = []
    //go trought i
    for (let i = 0; i <= grid.length - 1; i++) {
        if (i % 2 === 0) {
            //go trough ++j
            for (let j = 0; j <= grid[0].length - 1; j += 2) {
                result.push(grid[i][j])
            }
        } else {
            let offset = grid[0].length % 2 === 0 ? 1 : 2
            // go trough --j
            for (let j = grid[0].length - offset; j >= 0; j-=2) {
                result.push(grid[i][j])
            }
        }
    }
    return result
}