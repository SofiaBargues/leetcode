

/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {

    let timeSplited = time.split(":")
    let [hours, minutes] = timeSplited
    if (hours === "??") hours = "23"
    else if (hours[0] === "?") {
        if (Number(hours[1]) > 3) hours = "1" + hours[1]
        else hours = "2" + hours[1]
    } else if (hours[1] === "?") {
        if (hours[0] === "2") hours = "23"
        else hours = hours[0] + "9"
    }

    //minutes
    if (minutes === "??") minutes = "59"
    else if (minutes[0] === "?") minutes = "5" + minutes[1]
    else if (minutes[1] === "?") minutes = minutes[0] + "9"

    return [hours, minutes].join(":")
};