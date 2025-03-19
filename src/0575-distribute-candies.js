/**
 * @param {number[]} candyType
 * @return {number}
 */


//  candyType = [6,6,6,6]
var distributeCandies = function (candyType) {

    //    4
    let n = candyType.length
    //    1
    let types = new Set(candyType).size
//                    1     2
    return Math.min(types, n / 2)
};