/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let firstHalf = 0
    let secondHalf = 0
    let i = 0
    let j = s.length - 1
    // chequeo hasta que j-i!=1
    while (j > i) {
        if (vowels.has(s[i])) { firstHalf++ }
        i++
        if (vowels.has(s[j])) { secondHalf++ }
        j--
    }

    return firstHalf === secondHalf

};