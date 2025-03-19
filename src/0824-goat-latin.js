/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    let arrWords = sentence.split(" ")
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    for (let i = 0; i <= arrWords.length - 1; i++) {
        let word = arrWords[i]
        //vowel 
        if (set.has(word[0]) === false) {
            let arrWord = word.split("")
            let char = arrWord.shift()
            arrWord.push(char)
            word = arrWord.join("")
        }
        // add index times "a"
        let aSrt = new Array(i + 1).fill("a").join("")
        arrWords[i] = word + "ma" + aSrt
    }
    return arrWords.join(" ")
};