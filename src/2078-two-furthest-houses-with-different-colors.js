/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    let dist = []

    for (let i = 0; i <= colors.length - 1; i++) {
        end = colors[colors.length - 1]
        if (colors[i] != end) dist.push((colors.length - 1) - i)
    }
    for (let i = colors.length - 1; i >= 0; i--) {
        start = colors[0]
        if (colors[i] != start) {
            dist.push(i)
        }
    }
    return Math.max(...dist)
};