/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let aVal = true
    let bVal = false
    let aCost = 0
    let bCost = 0
    for (const char of s) {
       let charVal = char === "1"
        aCost = aVal === charVal ? aCost : aCost + 1
        bCost = bVal === charVal ? bCost : bCost + 1
        aVal = !aVal
        bVal = !bVal
    }
    return Math.min(aCost, bCost)
};