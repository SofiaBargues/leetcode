/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let arrSorted = [...arr]
    arrSorted.sort((a, b) => a - b)
    let obj = {}
    let rank = 1
    for (const num of arrSorted) {
        if (!(num in obj)) {
            obj[num] = rank
            rank++
        }
    }
    for (let i = 0; i <= arr.length-1 ; i++) {
        arr[i] = obj[arr[i]]
    }

    return arr
};