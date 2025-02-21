/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
    let result = []
    for (let i = 1; i <= mountain.length - 2; i++) {
        let prev = mountain[i - 1]
        let curr = mountain[i]
        let next = mountain[i + 1]
        if (curr > prev && curr > next) {
            result.push(i)
        }
    }
    return result
};