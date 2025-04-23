/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    let absent = 0
    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] === "A" && absent === 0) {
            absent = absent + 1
        } else if  (s[i] === "A" && absent != 0){
            return false
        }
        if (s[i] === "L" && s[i + 1] === "L" && s[i + 2] === "L") {
            return false
        }
    }
    return true
};