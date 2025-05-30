/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
    // check each diagonal
    let startPoints = []
    let m = mat[0].length - 1
    let n = mat.length - 1

    for (let c = m; c >= 0; c--) {
        startPoints.push([0, c])
    }
    for (let r = 1; r <= n; r++) {
        startPoints.push([r, 0])
    }

    for (const [r, c] of startPoints) {

        arrValues = []
        let i = 0
        while (r + i <= n && c + i <= m) {
            console.log("r", r, "n", n, " c ", c, "m", m)
            arrValues.push(mat[r + i][c + i])
            i++
        }
        arrValues.sort((a, b) => a - b)

        for (let i = 0; i <= arrValues.length - 1; i++) {
            const val = arrValues[i]
            mat[r + i][c + i] = val
        }
    }
    return mat
};

