/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let result = []
    let curr = 0
    let reverse = true
    let sArr = s.split("")

    while (curr < s.length) {
        let modK = Math.min(k, s.length-curr)

        if (reverse) result.push(...sArr.slice(curr, curr + modK).reverse())
        else result.push(...sArr.slice(curr, curr + modK))
        
        reverse = (!reverse)
           curr += modK
    }

    return result.join("")
};