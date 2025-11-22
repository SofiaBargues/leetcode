/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
    while (nums.includes(original)) original = original * 2
    return original
};

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {

    const set = new Set(nums)
    while (set.has(original)) original = original * 2
    return original

};