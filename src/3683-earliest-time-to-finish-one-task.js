
/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks) {
    let result = Infinity
    for (const [s, t] of tasks) {
        if ((s + t) < result) result = s + t
    }
    return result
};
