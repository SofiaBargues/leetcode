/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let result = []
    let kArr = String(k).split("").map((x) => Number(x))
    let j = num.length - 1
    let h = kArr.length - 1
    let extra = 0
    let l = Math.max(num.length, kArr.length)
    for (let i = l - 1; i >= 0; i--) {
        num1 = kArr[h]
        num2 = num[j]
        if (kArr[h] === undefined) num1 = 0
        if (num[j] === undefined) num2 = 0

        let totalSum = num1 + num2 + extra
        extra = Math.floor(totalSum / 10)
        result.push(totalSum % 10)
        j--
        h--
    }
    if (extra === 1) result.push(extra)
    return result.reverse()
};


/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    numNumber = num.join("")
    return String(BigInt(numNumber) + BigInt(k)).split("").map((x) => Number(x))
};

