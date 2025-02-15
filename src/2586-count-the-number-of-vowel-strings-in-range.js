/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
    let vowels = new Set(["a", "e", "i", "o", "u"])
    let result = 0
    //para cada palabra dentro del rango L&R chequeo
    for (let i = left; i <= right; i++) {
        let word = words[i]
        //si es una palabra vocal
        let first = word[0]
        let last = word[word.length - 1]
        if (vowels.has(first) && vowels.has(last)) result += 1
        // add 1 to result
    }
    return result
};