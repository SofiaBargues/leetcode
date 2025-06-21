/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {


    let result = []
    let t = 0
    let r = 0
    let l = matrix[0].length - 1
    let b = matrix.length - 1
    let dir = "lr"
    while (t <= b && r <= l) {
        if (dir === "lr") {
            //left->  right
            for (let i = r; i <= l; i++) {
                result.push(matrix[t][i])
            }
            t++
            dir = "tb"
        } else if (dir === "tb") {
            //top->bottom
            for (let i = t; i <= b; i++) {
                result.push(matrix[i][l])
            }
            l--
            dir = "rl"
        } else if (dir === "rl") {
            // right -> left
            for (let i = l; i >= r; i--) {
                result.push(matrix[b][i])
            }
            b--
            dir = "bt"
        } else {
            //bottom -> top
            for (let i = b; i >= t; i--) {
                // console.log(r, i)/
                result.push(matrix[i][r])
            }
            r++
            dir = "lr"
        }
    }
    return result
};