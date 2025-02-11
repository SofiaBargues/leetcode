/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {

    //parseo text
    text = text.split(" ")
    brokenLetters = new Set(brokenLetters)
    let result = 0
    //por cada palabra
    for (const word of text) {
        let isPossible = true
        //por cada char de palabra
        for (const char of word) {
            //brokenLettes.has(char)
            if (brokenLetters.has(char)) {
                isPossible = false
                break
            }
        }
        if (isPossible) result += 1
    }
    return result
};