/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let arr = [... Array(k)].map((_, i) => i + 1)
    let set = new Set(arr)
    let acc = 0
    for (let i = nums.length - 1; i >= 0; i--) {
        acc += 1
        let num = nums[i]
        if (set.has(num)) {
            set.delete(num)
            if (set.size === 0) return acc
        }
    }
    return acc
};