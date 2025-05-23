

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (nums, k) {
    function isIncreasing(arr) {
        if (arr.length < k) return false
        for (let i = 1; i <= arr.length - 1; i++) {
            let prev = arr[i - 1]
            let curr = arr[i]
            if (prev >= curr) return false
        }
        return true
    }

    let n = nums.length
    // go though arr
    for (let i = 0; i <= n - 1; i++) {
        //get subarr  
        aArr = nums.slice(i, k + i)
        //check is incrising   
        if (isIncreasing(aArr)) {
            let bArr = nums.slice(k + i, k + k + i)
            if (isIncreasing(bArr)) return true

        }
    }
    return false
};