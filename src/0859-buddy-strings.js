/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    let idx1 = undefined
    let idx2 = undefined
    if (s.length!=goal.length) return false
    for (let i = 0; i <= s.length - 1; i++) {
        let isDiff = s[i] != goal[i]
        if (isDiff) {
            if (idx1 === undefined) idx1 = i
            else if (idx2 === undefined) idx2 = i
            else return false
        }
    }
    if (idx2 === undefined && idx1 != undefined) return false
    if (idx2 === undefined && idx1 === undefined) {
        return new Set(s.split("")).size < s.length
    }
    return s[idx1] === goal[idx2] && s[idx2] === goal[idx1]
};

