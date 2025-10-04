/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let result = [...arr]
    let max= arr[arr.length-1]
    for (let i = arr.length-2 ; i >= 0; i--) {
        result[i] = max
        if (arr[i]>max)max=arr[i]
    }
    result[arr.length - 1] = -1
    return result
};

