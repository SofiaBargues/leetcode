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

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
// var numWaterBottles = function (numBottles, numExchange) {
//     let total = numBottles
//     let modul = 0

//     while (numBottles >= numExchange) {
//         total += Math.floor(numBottles / numExchange)
//         modul = numBottles % numExchange
//         numBottles = Math.floor(numBottles / numExchange) + modul
//     }

//     return total
// };
var numWaterBottles = function (numBottles, numExchange) {
    return numBottles + Math.floor((numBottles - 1) / (numExchange - 1));
};

