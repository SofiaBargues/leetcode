
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let obj = {}
    for (const num of nums) {
        if (obj[num]) {
            obj[num]++
        }
        else obj[num] = 1
    }
    arrNums = Object.keys(obj).map((x) => Number(x))
    // console.log(arrNums)

    let result = 0
    for (num of arrNums) {
        if (obj[num + 1]) {
            if (obj[num + 1] + obj[num] > result) result = obj[num + 1] + obj[num]
        }
    }

    return result

};/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let obj = {}
    for (const num of nums) {
        if (obj[num]) {
            obj[num]++
        }
        else obj[num] = 1
    }
    arrNums = Object.keys(obj).map((x) => Number(x))
    // console.log(arrNums)

    let result = 0
    for (num of arrNums) {
        if (obj[num + 1]) {
            if (obj[num + 1] + obj[num] > result) result = obj[num + 1] + obj[num]
        }
    }

    return result

};
