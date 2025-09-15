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

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {

    let arrText = text.split(" ")
    let arrBrokenLetters = brokenLetters.split("")
    let total = 0
    if (arrBrokenLetters.length===0) return arrText.length

    for (const word of arrText) {
        for (let i = 0; i <= arrBrokenLetters.length - 1; i++) {
            let brokenKey = arrBrokenLetters[i]
            if (word.indexOf(brokenKey) != -1) {
                break
            } else if ( i === arrBrokenLetters.length- 1) total++
        }

    }
    return total
};


