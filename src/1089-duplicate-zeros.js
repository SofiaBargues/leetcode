/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let newArr = []
    let i = 0
    while (newArr.length < arr.length) {
        if (arr[i] === 0) newArr.push(0)
        newArr.push(arr[i])
        i++
    }

    for (let i = 0; i <= arr.length - 1; i++) {
        arr[i] = newArr[i]
    }
};