/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    let result = []
    let h = grid.length
    let w = grid[0].length
    let mainArr = grid.flat()
    k = k % mainArr.length
    let kArr = mainArr.slice(mainArr.length - k, mainArr.length)
    mainArr = kArr.concat(mainArr.slice(0, mainArr.length - k))
    for (let i = 0; i <= h * w - 1; i += w) {
        end = i + w
        result.push(mainArr.slice(i, end))
    }
    return result
};
