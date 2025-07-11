/**
 * @param {string[]} words
 * @return {string[]}
 */


function isPossible(word) {
    const first = new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"])
    const second = new Set(["a", "s", "d", "f", "g", "h", "j", "k", "l"])
    const threed = new Set(["z", "x", "c", "v", "b", "n", "m"])


    let char = word[0].toLowerCase()
    let row = ""
    if (first.has(char)) row = "first"
    else if (second.has(char)) row = "second"
    else row = "threed"

    if (row === "first") {
        for (const char of word) {
            if (!first.has(char.toLowerCase())) return false
        }
        return true
    } else if (row === "second") {
        for (const char of word) {
            if (!second.has(char.toLowerCase())) return false
        }
        return true
    } else {
        for (char of word) {
            if (!threed.has(char.toLowerCase())) return false
        }
        return true
    }
}

var findWords = function (words) {
    let result = []
    for (const word of words) if (isPossible(word)) result.push(word)
    return result
};

