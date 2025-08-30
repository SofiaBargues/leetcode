/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
    let bigVal = []
    let replace = []
    for (let c = 0; c <= matrix[0].length - 1; c++) {
        let val = 0
        for (let r = 0; r <= matrix.length - 1; r++) {
            if (matrix[r][c] > val) val = matrix[r][c]
            else if (matrix[r][c] === -1) replace.push([[r], [c]])
        }
        bigVal[c] = val
    }

    for (const [r, c] of replace) {
        matrix[r][c] = bigVal[c]
    }
    return matrix
};

