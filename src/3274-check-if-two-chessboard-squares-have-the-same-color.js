/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
    let obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8
    }
    function isBlak(coordinate) {
        if ((obj[coordinate[0]] + Number(coordinate[1])) % 2 === 0) return true
        return false
    }

    console.log(isBlak(coordinate1), isBlak(coordinate2))
    return isBlak(coordinate1) === isBlak(coordinate2)
};