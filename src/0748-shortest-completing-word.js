/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    let numbers = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " "])
    let arrLicenseShort = licensePlate.split("").filter((x) => !numbers.has(x)).map((x) => x.toLowerCase())
    let wordSorted = words.sort((a, b) => a.length - b.length)

    let objL = {}
    for (const char of arrLicenseShort) {
        if (char in objL) {
            objL[char] = objL[char] + 1
        } else {
            objL[char] = 1
        }
    }

    let arrLicenseLetter = Object.keys(objL)

    // console.log("arr keys", arrLicenseLetter)
    // console.log("objL", objL)


    for (word of wordSorted) {
        objW = {}
        for (const char of word) {
            if (char in objW) {
                objW[char] = objW[char] + 1
            } else {
                objW[char] = 1
            }
        }

        let isValid = true;
        for (const letter of arrLicenseLetter) {
            if (!(letter in objW) || objL[letter] > objW[letter]) {
                isValid = false;
                break;
            }
        }

        if (isValid) return word; 

    }

};