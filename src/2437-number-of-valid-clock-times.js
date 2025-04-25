/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
    let result = [1, 1]
    let arrTime = time.split(":")
    let hour = arrTime[0]
    let minutes = arrTime[1]

    //hours
    if (hour === "??") {
        result[0] = 24
    } else if (hour[0] === "?") {
        if (Number(hour[1]) > 3) result[0] = 2
        if (Number(hour[1]) <= 3) result[0] = 3
    } else if (hour[1] === "?") {
        if (Number(hour[0]) < 2) result[0] = 10
        if (Number(hour[0]) === 2) result[0] = 4
    }

    //minutes
    if (minutes === "??") result[1] = 60
    else if (minutes[0] === "?") result[1] = 6
    else if (minutes[1] === "?") result[1] = 10

    return result[1] * result[0]
};