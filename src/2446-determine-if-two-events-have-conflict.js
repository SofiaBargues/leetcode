/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
    let num1S = Number(event1[0].split(":").join(""))
    let num1E = Number(event1[1].split(":").join(""))
    let num2S = Number(event2[0].split(":").join(""))
    let num2E = Number(event2[1].split(":").join(""))
    // if (num1E>=num2S|| ) return true

    if (num1E < num2S || num2E < num1S) return false
    return true
};