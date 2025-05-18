

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {


    let x1 = coordinates[0][0]
    let x2 = coordinates[1][0]
    let y1 = coordinates[0][1]
    let y2 = coordinates[1][1]

    if (x1 === x2) {
        for (const [x, y] of coordinates) {
            if (x != x1) {
                return false
            }
        }

    } else {

        const b = (y2 - y1) / (x2 - x1)
        const a = y1 - b * x1

        for (const [x, y] of coordinates) {
            if (y != a + b * x) {
                return false
            }
        }
    }

    return true

};