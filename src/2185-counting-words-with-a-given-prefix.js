/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let acc = 0
    //Check each word of words
    for (const word of words) {
        if (word.startsWith(pref)) acc++
    }
    return acc
}