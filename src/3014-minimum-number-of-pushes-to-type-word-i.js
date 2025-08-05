
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    let obj = {}
    for (const char of word) {
        if (char in obj) obj[char]++
        else obj[char] = 1
    }


    let arr = Object.values(obj).sort((a, b) => b - a)
    let i = 0
    let total = 0
    while (i < arr.length) {
        if (i <= 7) {
            total += arr[i]
        } else if (i <= 15) {
            total = total + arr[i] * 2
        } else if (i <= 23) {
            total += (arr[i] * 3)
        } else {
            total += (arr[i] * 4)
        }
        i++
    }
    return total

    // return 0
};
