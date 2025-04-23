/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    let chars = []
    let acc = 0
    //if the str are iqual return true
    if (s1 === s2) return true
    //go thougth s1 
    for (let i = 0; i <= s1.length - 1; i++) {
        if (s1[i] != s2[i]) {
            //count differences 
            acc++
            //save chars 
            chars.push([s1[i], s2[i]])
            if (acc > 2) {
                return false
            }
        }
    }
    console.log(chars)
    if (chars.length === 2 && chars[1][1] === chars[0][0] && chars[0][1] === chars[1][0]) return true
    return false
};