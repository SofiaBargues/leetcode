
/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function (s) {
    let hours = s.slice(0, 2)
    let minutes = s.slice(3, 5)

    if (hours === "??") hours = "11"
    if (hours[0] === "?") {
        if (hours[1] === "1" || hours[1] === "0") hours = "1" + hours[1]
        else hours = "0" + hours[1]
    }
    if (hours[1] === "?") {
        if (hours[0] === "1") hours = hours[0] + "1"
        else hours = hours[0] + "9"
    }

    if (minutes === "??") minutes = "59"
    if (minutes[0] === "?") minutes = "5" + minutes[1]
    if (minutes[1] === "?") minutes = minutes[0] + "9"

    return hours + ":" + minutes
};
