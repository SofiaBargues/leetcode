/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let result = 0
    let chars = new Set()
    let englishAlphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    let l = word.length
    for (let i = 0; i <= l - 1; i++) {
        chars.add(word[i])
    }
    for (let char of englishAlphabet) {
        if (chars.has(char) && chars.has(char.toLowerCase())) {
            result = result + 1
        }
    }
    return result
};