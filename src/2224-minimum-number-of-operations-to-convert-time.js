
/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
    const [correctH, correctM] = correct.split(":").map((x) => Number(x))
    const [currentH, currentM] = current.split(":").map((x) => Number(x))

    let totalMin = (correctM + correctH * 60) - (currentM + currentH * 60)
    let operations = 0
    if (totalMin >= 60) {
        operations += Math.floor(totalMin / 60)
        totalMin = totalMin % 60
    }
    if (totalMin >= 15) {
        operations += Math.floor(totalMin / 15)
        totalMin = totalMin % 15
    }
    if (totalMin >= 5) {
        operations += Math.floor(totalMin / 5)
        totalMin = totalMin % 5
    }
    if (totalMin >= 1) {
        operations += Math.floor(totalMin / 1)
            totalMin = totalMin % 1
    }

return operations
};
