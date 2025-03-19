/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let max = ""
    for (let i = 0; i <= num.length - 1; i++) {
        console.log(max, num[i])
        if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
            if (max < num[i]) max = num[i]
            i += 2
        }
    }
    return max + max + max
};