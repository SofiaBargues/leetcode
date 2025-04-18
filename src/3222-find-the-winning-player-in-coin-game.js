/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var winningPlayer = function (x, y) {
    let winnerAlice = false
    while (x && y > 3) {
        x -= 1
        y -= 4
        winnerAlice = (!winnerAlice)
    }
    return winnerAlice ? "Alice" : "Bob"
};