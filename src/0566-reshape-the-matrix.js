/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    let nums = mat.flat()
    if (nums.length != r * c  ) return mat

    let result = []
    let i = 0

    while (r > 0) {
        let row = []
        let cols = c
        while (cols > 0) {
            row.push(nums[i])
            i++
            cols--
        }
        result.push(row)
        r--
    }
    return result
};