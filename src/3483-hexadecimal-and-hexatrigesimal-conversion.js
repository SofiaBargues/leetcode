/**
 * @param {number} n
 * @return {string}
 */
var concatHex36 = function (n) {
    let hexadecimal = n * n
    let hexatrigecimal = n * n * n


    let base16 = hexadecimal.toString(16)
    let base36 = hexatrigecimal.toString(36)

    let result = base16 + base36
    return result.toUpperCase()

};