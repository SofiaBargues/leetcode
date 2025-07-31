

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function (nums, k) {
    let total = 0
    let n = nums.length
    for (let i = 0; i <= n - 1; i++) {
        let num = nums[i]
        if (i - k >= 0 && i + k < n) {
            // check numbers  i-k and i+k
            if (num > nums[i - k] && num > nums[i + k]) total+=num
        } else if (i - k < 0 && i + k < n) {
            //just check nums at i+k
            if (num > nums[i + k])  total+=num
        } else if (i - k >= 0 && i + k >= n) {
            //just check nums at i-k
            if (num > nums[i - k])  total+=num
        } else  total+=num
    }
    return total
};