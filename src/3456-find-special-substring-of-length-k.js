

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function (s, k) {
    let acc = 0
    for (let i = 0; i <= s.length - 1; i++) {
        let curr = s[i]
        let next = s[i + 1]
        //count 
        if (curr === s[i - 1]) acc++
        else acc = 1
        //check
        if (k === acc && next != curr) return true
    }
    return false
};