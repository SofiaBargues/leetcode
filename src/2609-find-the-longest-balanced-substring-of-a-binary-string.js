/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
    let longBalSubStri = 0
    let zeroCount = 0;
    let oneCount = 0;
    for (let i = 0; i < s.length ; i++) {
        if (s[i-1] === '1' && s[i] === '0') {
            zeroCount = 0;
            oneCount = 0;
        }
        if (s[i] === "0") {
            zeroCount++
        } else {
            oneCount++
        }

        longBalSubStri = Math.max(longBalSubStri, Math.min(zeroCount, oneCount))
    }
    return longBalSubStri * 2
};