/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    //obj char->widths|
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let obj = {}
    for (let i = 0; i <= alphabet.length - 1; i++) {
        let char = alphabet[i]
        obj[char] = widths[i]
    }

    let acc = 0
    let fila = 1
    for(const char of s) {
        let widthChar = obj[char]
        if (acc + widthChar <= 100){
            acc += widthChar
        } else {
            acc = widthChar
            fila++
        }
    }
    return [fila, acc]
};