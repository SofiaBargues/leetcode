

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {

    let total = arr.reduce((acc, curr) => acc + curr, 0) 
    let part = total / 3
    if (total % 3 != 0) return false
    // console.log("(part", part)
    let partAcc = 0
    let acc = 0
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        acc = acc + num
        if (acc === part) {
            partAcc++
            acc = 0
            if ((partAcc === 2) && (i < arr.length - 1)) return true
        }
    }

    return false 
};