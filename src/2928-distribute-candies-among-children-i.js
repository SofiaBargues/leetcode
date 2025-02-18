/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
    let result = 0
    let iEnd = Math.min(n, limit)
    for (let i = 0; i <= iEnd; i++) {
        let jEnd = Math.min(n-i, limit)
        for (let j = 0; j <= jEnd; j++) {
            if (i + j > n) break
            if (n-i-j>limit)continue
            // console.log(i, j, n-i-j)
            result++
        }
    }
    return result
};