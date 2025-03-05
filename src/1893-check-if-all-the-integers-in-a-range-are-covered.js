/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    let arr = new Array(51).fill(false)
    for (let i = 0; i <= ranges.length - 1; i++) {
        let range = ranges[i]
        let start = range[0]
        let end = range[1]
        for (let j = start; j <= end; j++) {
            arr[j] = true
        }
    }
    return arr.slice(left, right + 1).every((x) => x === true)
};