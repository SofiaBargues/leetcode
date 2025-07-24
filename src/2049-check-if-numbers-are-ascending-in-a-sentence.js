
/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {

    let arrTokens = s.split(" ")
    let prev = -1
    for (const token of arrTokens) {
        num = token[0].charCodeAt(0)
        if (num >= "0".charCodeAt(0) && token[0] <= "9".charCodeAt(0)) {
            if (Number(token) <= prev) return false
            prev = Number(token)
        }
    }
    return true
};
