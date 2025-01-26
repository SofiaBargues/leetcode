/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    //set and sort
    //arr=1,3,5,8,9
    let arr = points.map((x) => x[0])
    arr = new Set(arr)
    arr = Array.from(arr)
    arr.sort((a, b) => a - b)

    let result = 0
    for (let i = 0; i <= arr.length - 1; i++) {
        let gap = arr[i + 1] - arr[i]
        if (result < gap) result = gap
    }
    return result
};