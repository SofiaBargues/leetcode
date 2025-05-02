/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function (events) {
    let maxTime = events[0][1]
    let result = events[0][0]

    for (let i = 1; i <= events.length - 1; i++) {
        let duration = events[i][1] - events[i - 1][1]
        let index = events[i][0]

        if (duration > maxTime || duration === maxTime && index < result) {
            maxTime = duration
            result = index
        }
    }
    return result
};

