
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function (nums) {
    //counter hash map
    let obj = {}
    for (const num of nums) {
        if (obj[num]) obj[num]++
        else obj[num] = 1
    }

    let arr = Object.values(obj)

    let primeNums = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])


    for (const num of arr) {
        if (primeNums.has(num)) return true
    }
    return false
};
