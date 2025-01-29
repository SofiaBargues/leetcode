/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
    arr = s.toLowerCase()
    // for char of s
    let counter = 0
    for (let i = 0; i <= arr.length - 2; i++) {
        let char = arr[i]
        let nextChar = arr[i + 1]
        if (char != nextChar) {
            counter++
        }
    }
return counter
};