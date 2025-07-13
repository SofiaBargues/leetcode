
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    let odd = 0
    let even = 0
    for (const num of position) {
        if (num % 2 === 0) even++
        else odd++
    }
    let result = 0
    if (even > 0 && odd > 0) {
        result = Math.min(even, odd)
    }
    return result
};
