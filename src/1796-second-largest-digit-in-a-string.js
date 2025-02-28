/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let bigest = -1
    let secondBiggest = -1
    s = Array.from(new Set(s))
    set = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"])
    for (const char of s) {
        if (set.has(char)) {
            if (Number(char) > Number(bigest)) {
                secondBiggest = Number(bigest)
                bigest = Number(char)
            } else if (Number(char) > Number(secondBiggest)) {
                secondBiggest = Number(char)

            }
        }
    }

    return secondBiggest
};