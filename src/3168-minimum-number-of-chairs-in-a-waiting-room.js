/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
    let acc = 0
    let maxAcc = 0
    for (char of s) {
        if (char === "E") {
            acc = acc + 1
        }
        if (acc > maxAcc) maxAcc=acc 
        if (char === "L") acc = acc - 1
    }
    return maxAcc
};