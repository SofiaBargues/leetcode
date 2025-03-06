/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
    let grid1 = true
    let grid2 = true
    let grid3 = true
    let grid4 = true
    //recorro taget
    let n = mat.length
    for (let i = 0; i <= target.length - 1; i++) {
        for (let j = 0; j <= target.length - 1; j++) {
            let targetChar = target[i][j]
            if (targetChar != mat[i][j]) {
                grid1 = false
            }
            if (targetChar != mat[j][n - i - 1]) {
                grid2 = false
            }
            if (targetChar != mat[n - i - 1][n - j - 1]) {
                grid3 = false
            }
            if (targetChar != mat[n - j - 1][i]) {
                grid4 = false
            }
        }
    }
    //recorrro las 4 a la vez 
    console.log(grid1, grid2, grid3, grid4)
    // return true si alguna es igual al target
      return grid1===true|| grid2===true|| grid3===true|| grid4===true 

};