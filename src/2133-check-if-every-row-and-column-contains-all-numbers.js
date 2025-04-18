/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {

    for (let c = 0; c <= matrix.length - 1; c++) {
        let set = new Set()
        for (let r = 0; r <= matrix.length - 1; r++) {
            set.add(matrix[c][r])
        }
        if (set.size != matrix.length) {
            return false
        }
    }
    for (let r = 0; r <= matrix.length - 1; r++) {
        let set = new Set()
        for (let c = 0; c <= matrix.length - 1; c++) {
            set.add(matrix[c][r])
        }
        if (set.size != matrix.length) {
            return false
        }
    }
    return true
};