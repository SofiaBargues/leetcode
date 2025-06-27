/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    if (s.length % k != 0) {
        let missFill = k - (s.length % k)
        while (missFill) {
            s = s + fill
            missFill--
        }
    }

    let result = []
    let sArr = s.split("")
    for (let i = 0; i <= sArr.length - 1; i += k) {
        result.push(sArr.slice(i, i + k).join(""))
    }
    return result
};

