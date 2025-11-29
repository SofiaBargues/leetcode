/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function (n, w, maxWeight) {
    let total = 0
    for (let i = 1; i <= n * n; i++) {
        let pretotal = total + w
        if (pretotal > maxWeight) {
            return total / w
        } else if (pretotal === maxWeight) {
            return pretotal / w
        }
        total = pretotal
    }
    return total / w
};