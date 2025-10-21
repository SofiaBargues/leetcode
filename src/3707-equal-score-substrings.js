

/**
 * @param {string} s
 * @return {boolean}
 */
var scoreBalance = function (s) {
   let set = new Set()
   let total = 0
    for (const char of s) {
        total += char.charCodeAt(0) - 96
        set.add(total)
    }

    if (set.has(total / 2)) return true
    return false
};