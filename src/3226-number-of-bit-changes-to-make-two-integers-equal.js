/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n, k) {
    let nBinary = n.toString(2)
    let kBinary = k.toString(2)
    console.log(nBinary, kBinary)
    let l = Math.min(nBinary.length, kBinary.length)
    let total = 0
    if (kBinary.length > nBinary.length) {
        return -1
    } else if (kBinary.length === nBinary.length) {
        for (let i = kBinary.length - 1; i >= 0; i--) {
            if (kBinary[i] != nBinary[i]) {
                if (nBinary[i] === "1") total++
                else return -1
            }
        }
    } else {
        number = nBinary.length - kBinary.length
        let nArr = nBinary.split("")
        total += nArr.slice(0, number).filter((x) => x === "1").length
        nBinary = nBinary.slice(number)
        for (let i = kBinary.length - 1; i >= 0; i--) {
            if (kBinary[i] != nBinary[i]) {
                if (nBinary[i] === "1") total++
                else return -1
            }
        }
    }
    return total
};