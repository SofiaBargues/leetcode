/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
    let arrN = n.split("").map((x)=>Number(x))
    return Math.max(...arrN)
};