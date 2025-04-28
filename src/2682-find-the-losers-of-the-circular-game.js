/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
    let player = 1
    let seen = new Set()
    let result = []
    let i = 0
    while (true) {
        player = ((player + i * k - 1) % n) +1
        if(!seen.has(player))seen.add(player)
        else break
        i++
    }
    for (let i = 1; i <= n; i++) {
        if (!seen.has(i)) result.push(i)
    }
    return result
};