/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
    let objS = {}
    let objT = {}
    for (const char of target) {
        if (char in objT) {
            objT[char] = objT[char] + 1
        } else { objT[char] = 1 }
    }
    for (const char of s) {
        if (char in objS) {
            objS[char] = objS[char] + 1
        } else { objS[char] = 1 }
    }

    let times = Infinity

    for (let char of Object.keys(objT)) {
        if (!(char in objS)) return 0
        times = Math.min(times, Math.floor(objS[char]/objT[char]))
    }

    return times
};