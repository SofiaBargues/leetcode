/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
    let result = []
    let prev = groups[0] === 0 ? 1 : 0
    for (let i = 0; i <= groups.length - 1; i++) {
        let num = groups[i]
        if (prev != num) {
            result.push(words[i])
            prev = num
        }
    }
    return result
};