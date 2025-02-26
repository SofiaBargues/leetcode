/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    sentence=sentence.split(" ")
    for (const word of sentence) {
        if (word.startsWith(searchWord)){ return sentence.indexOf(word)+1}
    }
    return -1
};