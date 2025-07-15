/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    let nums = arr.length / 20
    console.log(nums)
    arr.sort((a, b) => a - b)

    let start = 0 + nums
    let end = arr.length - nums

    let slicedArr = arr.slice(start, end)

    return slicedArr.reduce((acc, curr) => acc + curr, 0) / slicedArr.length

};

