/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let secMax = 0
    let max = 0
    for (num of nums) {
        if (num > max) {
            secMax = max
            max = num
        }
        else if (num > secMax) secMax = num
    }
    return (max-1)* (secMax-1) 
};