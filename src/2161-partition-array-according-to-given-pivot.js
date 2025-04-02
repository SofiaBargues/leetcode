/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let numsFilter = nums.filter((x) => x != pivot)
    let resultSmall = []
    let resultBig = []
    let result = new Array(nums.length - numsFilter.length).fill(pivot)

    for (num of numsFilter) {
        if (num < pivot) resultSmall.push(num)
        else resultBig.push(num)
    }
    return [...resultSmall, ...result, ...resultBig]
};