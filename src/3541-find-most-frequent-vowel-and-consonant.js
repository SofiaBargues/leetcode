/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let vouwels = {
        a: 0,
        i: 0,
        e: 0,
        o: 0,
        u: 0
    }
    let consonants = {}
    let biggestVouwel = 0
    let biggestConsonant = 0
    for (const char of s) {
        if (vouwels[char] != undefined) {
            vouwels[char]++
            if (vouwels[char] > biggestVouwel) biggestVouwel = vouwels[char]
        } else {
            if (!consonants[char]) {
                consonants[char] = 1
            } else {
                consonants[char]++
            }
            if (consonants[char] > biggestConsonant) biggestConsonant = consonants[char]
        }
    }
    // console.log(vouwels, consonants)

    // return 0
    return biggestVouwel + biggestConsonant
};

