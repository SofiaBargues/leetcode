/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function (words, target, startIndex) {

    let n = words.length
    let dist = 0
    while (dist <= Math.floor(n / 2) + 1) {
        if (words[(startIndex - dist + n) % n] === target) return dist
        if (words[(startIndex+dist)%n] === target) return dist
        dist++
    
    }
    return -1
};