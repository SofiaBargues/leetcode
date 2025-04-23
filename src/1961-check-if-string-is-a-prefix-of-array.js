/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
    let prefix = ""
    for (const word of words) {
        let currPrefix = prefix + word
        let l = currPrefix.length
        // longer return false
        if (l > s.length) return false
        // === che str1.startsWith("Sat")
        else if (l === s.length) {
            return s === currPrefix
        }
        // shorter ? add next
        if (s.startsWith(currPrefix)) {
            prefix = currPrefix
        } else return false
    }
    return false 
};