/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    let arrWords = title.split(" ")
    // ["capiTalIze","tHe","titLe"]
    arrWords = arrWords.map((x) => x.toLowerCase())
    // ["capitalize","the","title"]
    for (let i = 0; i <= arrWords.length - 1; i++) {
        let word = arrWords[i]
        if (word.length >= 3) {
            let arrWord = word.split("")
            arrWord[0] = arrWord[0].toUpperCase()
            arrWords[i] = arrWord.join("")
        }
    }

    return arrWords.join(" ")
};