

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    let arr = [first]
    for (let i = 0; i <= encoded.length - 1; i++) {
        arr.push(encoded[i] ^ arr[arr.length - 1])
    }
    return arr
};