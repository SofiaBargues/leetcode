/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let acc = 0
    let obj = {}
    for (let i = 0; i <= dominoes.length - 1; i++) {
        dominoes[i].sort((a, b) => a - b)
        let domino = dominoes[i].toString()
        if (!obj[domino]) {
            obj[domino] = 1
        }
        else {
            acc = acc + obj[domino]
            obj[domino] = obj[domino] + 1
        }
    }
    return acc
}