/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 
var findKthPositive = function (arr, k) {
    let missingNums = 0
    let currNum = 1
    let i = 0
    while (missingNums < k) {
        if (i < arr.length && arr[i] === currNum) {
            i++
        } else {
            missingNums++
            if (missingNums === k) return currNum
        }
        currNum++
    }
};