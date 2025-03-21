/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
    let words = sentence.split(" ")
    //  ir atravez del array words
    let n = words.length
    for (let i = 0; i <= n - 1; i++) {
        //     word
        let word = words[i]
        //     secondWord 
        let secondWord = words[(i + 1) % n]
        //     comparo la ultima letra con la prtimera
        let first = secondWord[0]
        let last = word[word.length - 1]
        if (last != first) return false
        //         si son diferentes return false

    }
    return true

};