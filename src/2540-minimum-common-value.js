
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let set = new Set(nums1)
    let result = Infinity
    for (const num of nums2) {
        if (num < result && set.has(num)) result = num
    }
    return result == Infinity ? -1 : result
};
