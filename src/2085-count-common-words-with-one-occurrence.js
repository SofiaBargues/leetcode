
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    let obj1 = {}
    let obj2 = {}

    for (const word of words1) {
        if (obj1[word]) obj1[word]++
        else obj1[word] = 1
    }


    for (const word of words2) {
        if (obj2[word]) obj2[word]++
        else obj2[word] = 1
    }


    let arr1 = Object.entries(obj1).filter(([key, val]) => val === 1).map(([key, val]) => key)
    let arr2 = new Set(Object.entries(obj2).filter(([key, val]) => val === 1).map(([key, val]) => key))


    let total = 0
    for (const word of arr1) {
        if (arr2.has(word)) total++
    }

    return total
};
