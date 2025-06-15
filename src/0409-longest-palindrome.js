

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let obj = {}
    for (char of s) {
        if (obj[char]) obj[char]++
        else obj[char] = 1
    }

    let arrFrec = Object.values(obj)

    let result = 0
    let firstOdd = true
    for (const frec of arrFrec) {
        if (frec % 2 === 0) result += frec
        else if (firstOdd) {
            result += frec
            firstOdd = false
        } else {
            result = result + frec - 1
        }
    }
    return result
};