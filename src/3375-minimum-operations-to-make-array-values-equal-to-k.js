
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let set = Array.from(new Set(nums))
    if (set.length === 1 && nums[0] === k )return 0
   
    let result = 0
   
    for (const num of set) {
        if (num > k) result++
        else if (num < k) return -1
    }
    return result>0? result : -1
};
