/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
    let obj = {}
    for (const word of words) {
        let diference = []
        for (let i = 0; i <= word.length - 2; i++) {
            let j = i + 1
            diference.push((word[j].charCodeAt(0) - 97) - (word[i].charCodeAt(0) - 97))
        }
        if (obj[JSON.stringify(diference)]) obj[JSON.stringify(diference)][0]++
        else obj[JSON.stringify(diference)] = [1, word]
    }
    for (const [key, value] of Object.entries(obj)) {
        if (value[0] === 1) return value[1]
    }
};

