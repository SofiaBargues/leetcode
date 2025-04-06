/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
    function isInQueri(queri, point) {
        qR = queri[2]
        qX = queri[0]
        qY = queri[1]
        pX = point[0]
        pY = point[1]
        if (Math.pow((pX - qX), 2) + Math.pow((pY - qY), 2) <= qR * qR) {
            return true
        }
        return false
    }

    let result = []
    for (const queri of queries) {
        let insidePoints = 0
        for (const point of points) {
            if (isInQueri(queri, point)) {
                insidePoints++
            }
        }
        result.push(insidePoints)
    }

    return result
};