/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    const alphabetObj = {};

    for (let i = 65; i <= 90; i++) {
        const upper = String.fromCharCode(i);
        const lower = String.fromCharCode(i + 32);
        alphabetObj[upper] = lower;
        alphabetObj[lower] = upper;
    }

    function isNice(str) {
        let set = new Set(str.split(""))
        for (const char of str) {
            if (!set.has(alphabetObj[char])) {
                return false
            }
        }
        return true
    }
    let longerStr = [0, ""]
    for (let i = 0; i <= s.length - 2; i++) {
        for (let j = i + 1; j <= s.length - 1; j++) {
            let str = s.slice(i, j + 1)
            if (isNice(str)) {
                if (longerStr[0] < str.length) {
                    longerStr[0] = str.length
                    longerStr[1] = str
                }
            }
        }
    }

    return longerStr[1]
};