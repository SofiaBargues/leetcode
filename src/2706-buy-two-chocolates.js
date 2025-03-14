/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {

    let sortedPrices = prices.sort((a, b) => a - b)

    if (sortedPrices[0] + sortedPrices[1] <= money) return money - (sortedPrices[0] + sortedPrices[1])

    return money
};