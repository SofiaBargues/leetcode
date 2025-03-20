/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let obj = {}
    for (let i = 0; i <= arr.length - 1; i++) {
        num = arr[i]
        if (!(num in obj)) {
            obj[num] = 1
        } else {
            obj[num] = obj[num] + 1
        }
    }

    let keys = Object.keys(obj)
    let max = -1
    for (const key of keys) {
        if (Number(key) === obj[key]) {
            if (Number(key) > max) {
                max = key
            }
        }
    }
        
    return Number(max)
};