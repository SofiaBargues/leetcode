
/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    let max = 0
    for (const str of strs) {
        let num = Number(str)
        if (isNaN(num)) max = Math.max(max, str.length)
        else max = Math.max(max, num)
    }
    return max
};
