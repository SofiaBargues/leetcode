

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
    let pairFounded = false
    let obj = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],

    }


    for (const num of nums) {
        let arrStrNum = String(num).split("").sort((a, b) => b - a)
        if (obj[arrStrNum[0]].length === 1) { pairFounded = true }
        obj[arrStrNum[0]] = [...obj[arrStrNum[0]], num]
    }

    let max = 0
    for (const value of Object.values(obj)) {
        value.sort((a, b) => b - a)
        if (value[0] + value[1] > max) max = value[0] + value[1]
    }



    if (pairFounded === false) return -1
    return max
};