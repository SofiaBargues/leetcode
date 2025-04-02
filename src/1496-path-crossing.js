/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    obj = {
        'N': [0, 1],
        'S': [0, -1],
        'E': [1, 0],
        'W': [-1, 0]
    }
    let seen = new Set(["[0,0]"])
    let prevDir = [0, 0]
    for (const char of path) {
        [dirX, dirY] = obj[char]
        let str = JSON.stringify([prevDir[0] + dirX, prevDir[1] + dirY])
        if (seen.has(str)) {
            return true
        }
        seen.add(str)
        prevDir = [prevDir[0] + dirX, prevDir[1] + dirY]
    }

    return false
};