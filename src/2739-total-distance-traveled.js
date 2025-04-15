/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
    let totalDistance = 0
    while (mainTank >= 5) {
        litersBatch = Math.floor(mainTank / 5)
        totalDistance += 50 * litersBatch
        mainTank -=  5 * litersBatch
        if (additionalTank > 0) {
            fromAdditional = Math.min(litersBatch, additionalTank)
            mainTank += fromAdditional
            additionalTank -= fromAdditional
        }
    }

    return totalDistance + (mainTank * 10)
};