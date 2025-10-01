
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s, k) {
    let result = ""
    let l = s.length
    for (let i = 0; i <= l - 1; i++) {
        result = result + s[(i + k) % l]

    }
    return result
};
