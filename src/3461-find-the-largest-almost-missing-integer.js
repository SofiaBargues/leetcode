

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
    obj = {}
    for (let i = 0; i <= nums.length - k; i++) {
        subArr = new Set(nums.slice(i, i + k))
        for (num of Array.from(subArr)) {
            if (num in obj) obj[num] = obj[num] + 1
            else obj[num] = 1
        }
    }
  

    if (k === 1 || k === nums.length) {
        let result = []
        for (const [key, val] of Object.entries(obj)) {
            if (val === 1) result.push(key)
        }
        if (result.length > 0) {
            return Math.max(...result)
        } else return -1
    } else {
        let first = nums[0]
        let last = nums[nums.length - 1]
        if (first === last) return -1

        let big = Math.max(first, last)
        let small = Math.min(first, last)

        if (obj[big] === 1) {
            console.log("big")
            return big
        }
        else if (obj[small] === 1) {
            return small
        }
    }
    return -1
};