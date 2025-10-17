

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
    
    if (k===1){
        return nums.length>=2
    }
    let total = 1
    for (let i = 0; i <= nums.length - 2; i++) {
        let b = k + i
        if (nums[i] < nums[i + 1] && nums[b] < nums[b + 1]) {
            total++
            if (total === k) {
                return true
            }
        } else {
            total =1}
    }
    return false
};