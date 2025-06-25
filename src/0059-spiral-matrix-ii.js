/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));
    console.log(matrix)
    let t = 0
    let l = 0
    let r = matrix[0].length - 1
    let b = matrix.length - 1
    let dir = "lr"
    let mainIndex = 1
    while (t <= b && l <= r) {
        if (dir === "lr") {
            //left->  right
            for (let i = l; i <= r; i++) {
                matrix[t][i] = mainIndex
                mainIndex++
            }
            t++
            dir = "tb"
        } else if (dir === "tb") {
            console.log(mainIndex)
            //top->bottom
            for (let i = t; i <= b; i++) {
                matrix[i][r] = mainIndex
                mainIndex++
            }
            r--
            dir = "rl"
        } else if (dir === "rl") {
            // right -> left
            for (let i = r; i >= l; i--) {
                matrix[b][i] = mainIndex
                mainIndex++
            }
            b--
            dir = "bt"
        } else {
            //bottom -> top
            for (let i = b; i >= t; i--) {
                matrix[i][l] = mainIndex
                mainIndex++
            }
            l++
            dir = "lr"
        }

    }
    return matrix
};

