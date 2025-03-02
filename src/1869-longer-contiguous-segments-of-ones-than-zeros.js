/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
    let maxOnesLength = 0
    let maxZerosLength = 0
    let onesLength = 0
    let zerosLength = 0

    for (i = 0; i <= s.length - 1; i++) {
        let char = s[i]
        if (char === "1") {
            onesLength++
            zerosLength = 0
        } else if (char === "0") {
            zerosLength++
            onesLength = 0
        }

        if (onesLength > maxOnesLength) maxOnesLength = onesLength
        if (zerosLength > maxZerosLength) maxZerosLength = zerosLength

    }
    return maxOnesLength > maxZerosLength
};