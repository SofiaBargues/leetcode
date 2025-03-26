/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {

    let obj = {}
    for (const char of s) {
        if (char in obj) obj[char] = obj[char] + 1
        else obj[char] = 1
    }

    for (const char of t) {
        if (obj[char]) obj[char]--
        else return char
    }

};