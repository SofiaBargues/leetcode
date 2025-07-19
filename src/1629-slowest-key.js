
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    let result = [releaseTimes[0], keysPressed[0]]
    for (let i = 1; i <= releaseTimes.length - 1; i++) {
        let time = releaseTimes[i] - releaseTimes[i - 1]
        if (time > result[0]) result = [time, keysPressed[i]]
        else if (time === result[0] && keysPressed[i].charCodeAt(0) > result[1].charCodeAt(0)) {
            result[1] = keysPressed[i]
        }
    }
    return result[1]
};
