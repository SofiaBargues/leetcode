
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function (grid) {
    let total = 0
    let index = 0
    while (index < grid[0].length) {
        for (let i = 1; i <= grid.length - 1; i++) {
            let curr = grid[i][index]
            let prev = grid[i - 1][index]
            if (prev > curr) {
                total += prev - curr + 1
                grid[i][index] = grid[i][index] + prev - curr + 1
            }else if (prev === curr){
                total ++
                grid[i][index] = grid[i][index] +  1

            }
        }
        index++
    }
    return total
};
