/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {

    let longestTask = [0, 0]
    let start = 0
    // loop i=0... logs.length-1
    for (let i = 0; i <= logs.length - 1; i++) {
        let task = logs[i]
        let end = task[1]
        let totalTime = end - start
        // if (totalTime > longestTask[1]) longestTask = [task[0], totalTime]
        // if (totalTime === longestTask[1]) {
        //     if (task[0] < longestTask[0]) longestTask[0] = task[0]
        // }
        if (totalTime > longestTask[1] || (task[0] < longestTask[0] && totalTime === longestTask[1])) {
            longestTask = [task[0], totalTime]
        }
        start = end
    }
    return longestTask[0]
};