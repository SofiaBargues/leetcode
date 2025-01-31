/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
    let tested = 0
    for (const bP of batteryPercentages) {
        if ( bP - tested > 0) {
            tested++
        }
    }
    return tested
};