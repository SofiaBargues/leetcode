/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
    s = rounds[0]
    l = rounds.length
    e = rounds[l - 1]
    arr = Array.from({ length: n }, (_, i) => i + 1)
    if (s === e) {
        // console.log(1)
        return [s]
    }
    else if (s > e) {
        end = arr.slice(0, e)
        start = arr.slice(s - 1, n)

        // console.log(end,start)
        // console.log(2)
        return [ ...end,...start]
    } else if (s < e) {
        // console.log(3)
        return arr.slice(s - 1, e)
    }
}
