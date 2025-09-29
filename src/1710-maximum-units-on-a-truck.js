
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1])

    let i = 0
    let total = 0

    while (truckSize > 0) {
        if (i === boxTypes.length) {
            return total
        } else if (boxTypes[i][0] > 0) {
             boxTypes[i][0]--
            truckSize--
            total +=  boxTypes[i][1]
        } else if (i < boxTypes.length) i++

    }
    return total
};
