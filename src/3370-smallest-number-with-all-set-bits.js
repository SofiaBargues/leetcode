/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {

    const powerOfTwo = Math.floor(Math.log2(n)) + 1
    const result = Math.pow(2, powerOfTwo) - 1

    return result
};