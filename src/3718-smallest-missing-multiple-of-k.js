

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
    let set = new Set(nums)
    let smallestM = k
    while (set.has(smallestM)) {
        smallestM += k
    }
    return smallestM
};