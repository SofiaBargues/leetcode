
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
    let result = [...grid[0]].map((x) => x = String(x).length)


    for (let i = 0; i <= grid.length-1; i++) {
        for (let j = 0; j <= grid[0].length-1; j++) {
            if (String(grid[i][j]).length > result[j]) result[j] = String(grid[i][j]).length
        }
    }

    return result
};
