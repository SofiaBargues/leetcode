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

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let vowels = new Set(["a", "i", "e", "o", "u"])

    let vowelsFinded = {}

    let consonantFinded = {}

    for (const char of s) {
        //is a vowel ?
        if (vowels.has(char)) {
            if (vowelsFinded[char]) vowelsFinded[char]++
            else vowelsFinded[char] = 1
        } else {
            //is a consonant
            if (consonantFinded[char]) consonantFinded[char]++
            else consonantFinded[char] = 1
        }
    }
    let maxV = Math.max(...Object.values(vowelsFinded) , 0)

    let maxC = Math.max(...Object.values(consonantFinded), 0 )


     return maxV + maxC

};
