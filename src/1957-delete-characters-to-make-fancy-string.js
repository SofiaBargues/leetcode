
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    let result = []
    for (let i = 0; i <= s.length-1; i++) {
        if (!( s[i - 1] === s[i - 2] && s[i] === s[i - 2]) ) {
            result.push(s[i])
        }
    }
    return result.join("")
};
