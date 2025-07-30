/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    let result = 0
    for (const num1 of arr1) {
        let isValid = true
        for (const num2 of arr2) {
            if (Math.abs(num1 - num2) <= d) {
                isValid = false
                break
            }
        }
        if (isValid) result++
    }
    return result
};

