/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let nStr = n.toString(2)
    let maxDist = 0
    let i = 0
    for (let j = 0; j <= nStr.length - 1; j++) {
        if (nStr[j] === "1") {
            if (j - i > maxDist) {
                maxDist = j - i
            }
            i = j
        }
    }
    return maxDist
};