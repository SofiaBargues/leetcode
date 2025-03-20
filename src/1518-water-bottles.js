/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let total = numBottles
    while (numBottles >= numExchange) {
        let divition = Math.floor(numBottles / numExchange)
        let modul = numBottles % numExchange

        total = divition + total
        numBottles = divition + modul
    }
    return total
};