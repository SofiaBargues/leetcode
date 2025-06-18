/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    let increasing = undefined
    if (nums[0] > nums[nums.length - 1]) {
        increasing = false
    } else increasing = true
    
    for (let i = 0; i <= nums.length; i++) {
        num = nums[i]
        next = nums[i + 1]
        if (num < next && !increasing  || num > next && increasing) return false
    }

    return true
};

