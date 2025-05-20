/**
 * @param {string} sentence
 * @return {number}
 */
function isLowerCase(char) {
    return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122
}

function isWordValid(word) {
    let hyphen = 0
    for (let i = 0; i <= word.length - 1; i++) {

        char = word[i]
        if (isLowerCase(char)) {

        } else if (char === "-") {
            hyphen++
            if (i === 0 ||i === word.length - 1 || !isLowerCase(word[i - 1]) || !isLowerCase(word[i + 1]) || hyphen > 1) {
                return false
            }

        } else if (char === "." || char === "," || char === "!") {
            if (i != word.length - 1) { return false }
        } else return false
    }
    return true
}

var countValidWords = function (sentence) {
    let words = sentence.split(" ").filter((x) => x != "")
    let acc = 0
    for (const word of words) {
        if (isWordValid(word)) acc++
    }
    return acc
};

