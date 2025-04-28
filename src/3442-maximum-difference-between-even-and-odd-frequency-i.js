/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
    let obj = {}
    //frecc counter
    for (const char of s) {
        if (char in obj) obj[char] = obj[char] + 1
        else obj[char] = 1
    }
    // sorted arr of frecc
    let arr = Object.values(obj)
    let firstEven = Infinity
    let lastOdd = 0
    for (const num of arr) {
        if (num % 2 === 0 && num<firstEven ) firstEven = num
        if (num % 2 != 0 && num>lastOdd) lastOdd = num
    }
    //return the biggest of :
    return lastOdd - firstEven
};