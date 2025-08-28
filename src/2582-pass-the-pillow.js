
/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    let round = Math.floor(time / (n - 1))
    let movements = time % (n - 1)

    if (round % 2 === 0) { 
        return 1 + movements 
    } else {
        return n - movements
    }
};
