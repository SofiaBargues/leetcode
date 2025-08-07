/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
    let maxMin = 0
    let acc = 0
    for (const val of nums) {
     acc+=val
     if (acc<maxMin)maxMin= acc
    }
    return Math.max(1-maxMin,1)
};

