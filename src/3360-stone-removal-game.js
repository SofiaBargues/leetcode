

/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function (n) {
    let stonesTotal = n
    let aliceWon = false
    let stonesToRemove = 10
    while ((stonesTotal - stonesToRemove) >= 0) {
        stonesTotal = stonesTotal - stonesToRemove
        aliceWon = !aliceWon
        stonesToRemove--
    }
    return aliceWon
};