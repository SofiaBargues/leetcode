/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"])
    arrS = s.split("")
    let i = 0
    let j = s.length - 1
    while (i < j) {
        if (!(vowels.has(s[i]))) {
            i++
            continue
        }
        if (!(vowels.has(s[j]))) {
            j--
            continue
        }
        let holder = arrS[i]
        arrS[i] = arrS[j]
        arrS[j] = holder
        i++
        j--

    }
    return arrS.join("")
};