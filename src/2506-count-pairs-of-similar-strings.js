
/**
 * @param {string[]} words
 * @return {number}
 */

function pairsCounter(num) {
    let acc = 0
    for (let i = 1; i < num; i++) {
        acc += num - i
    }
    return acc
}


var similarPairs = function (words) {
    let obj = {}
    //build an obj 
    for (const word of words) {
        let chars = new Set(word.split(""))
        chars = Array.from(chars).sort().join("")
        if (obj[chars]) obj[chars]++
        else obj[chars] = 1
    }
    let totalPairs = 0
    //go trhougth obj val
    let values = Object.values(obj)
    for (const val of values) {
        //to talPair+=pairsCounter(val) 
        totalPairs += pairsCounter(val)
    }
    return totalPairs
};
