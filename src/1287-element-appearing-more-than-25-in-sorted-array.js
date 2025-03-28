/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {

    let set = new Set(arr)
    let obj = {}
    if (set.size === 1) return arr[0]
    let l = arr.length
    let min = Math.floor(l / 4)
    let prev = arr[0]
    let count = 0
    let max = 0
    for (const char of arr) {
        console.log(count, max, char)
        if (char === prev) count++
        else {
            prev = char
            count = 1
        }
        if (count > min) max = char

    }
    return max
};