/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let l = 0
    let r = letters.length - 1
    while (l < r) {
        let m = Math.floor((l + r) / 2)
        if (letters[m] <= target ) {
            l = m + 1
        } else {
            r = m
        }

    }

    if (letters[l] > target) return letters[l]
    else return letters[0]

};