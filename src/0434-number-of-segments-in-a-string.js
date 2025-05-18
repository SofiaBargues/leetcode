
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    let prev = false
    let sNew = s.trim()
    if (sNew.length===0) return 0
    let acc = 1

    for (const char of sNew)
        if (char === " " && prev) {
            acc++
            prev = false
        } else if (char != " ") {
            prev = true
        }
    return acc
};
