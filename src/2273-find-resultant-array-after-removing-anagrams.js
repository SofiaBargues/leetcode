

/**
 * @param {string[]} words
 * @return {string[]}
 */

function areAnagram(word1, word2) {
    if (word1.length != word2.length) return false
    let first = word1.split("").sort().join("")
    let second = word2.split("").sort().join("")
    return first == second
}
var removeAnagrams = function (words) {
    let result = [words[0]]
    for (let i = 1; i <= words.length - 1; i++) {
        let word1 = words[i - 1]
        let word2 = words[i]
        if (!areAnagram(word1, word2)) {
            result.push(word2)
        }
    }
    return result
};