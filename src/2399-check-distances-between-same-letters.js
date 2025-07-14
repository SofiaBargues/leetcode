
/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
    //go troug char from 0...  s.length-1
    for (let i = 0; i <= s.length - 1; i++) {
        let char = s[i]
        let index = char.charCodeAt(0) - "a".charCodeAt(0)
        if (distance[index] != -1) {
            let currDistance = distance[index]
            if (s[i + currDistance + 1] != char) return false
            distance[index] = -1
        }
    }
    return true
};
