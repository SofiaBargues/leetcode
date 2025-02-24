/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    let specialPost = 0
    let totalRow = new Array(mat.length).fill(0)
    let totalCol = new Array(mat[0].length).fill(0)
    for (i = 0; i <= mat.length - 1; i++) {
        for (j = 0; j <= mat[0].length - 1; j++) {
            totalRow[i] += mat[i][j]
            totalCol[j] += mat[i][j]
            // console.log(totalCol, totalRow)
        }
    }
    for (i = 0; i <= mat.length - 1; i++) {
        for (j = 0; j <= mat[0].length - 1; j++) {
            if (mat[i][j] === 1) {
                // let row = mat[i].reduce((acc, curr) => acc + curr, 0)
                // let col = mat.map((arr) => arr[j]).reduce((acc, curr) => acc + curr, 0)
                if (totalCol[j] === 1 && totalRow[i] === 1) {
                    specialPost++
                    // console.log(totalCol[j], totalRow[i])
                }
            }
        }
    }
    return specialPost
}