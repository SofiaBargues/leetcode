/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    let result = []
    let obj = {}
    for (let i = 0; i <= groupSizes.length - 1; i++) {
        let size = groupSizes[i]
        if (size in obj) {
            obj[size] = [...obj[size], i]
        } else {
            obj[size] = [i]
        }
    }
    for (const [key, values] of Object.entries(obj)) {
        let partial = []
        for (let i = 0; i <= values.length - 1; i += Number(key)) {
            result.push(values.slice(i, Number(key) + i))
        }
    }
    return result
};