/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    let n = matrix.length
    let m = matrix[0].length
    //    i ...n-2
    for (let i = 0; i <= n - 2; i++) {
        //  j...m-2
        for (let j = 0; j <= m - 2; j++) {
            if (matrix[i][j] != matrix[i + 1][j + 1]) return false
        }
    }

    return true

};