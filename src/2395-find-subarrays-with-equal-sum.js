/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
    let results = new Set()
    //go thougth nums 
    for (let i = 0; i <= nums.length - 2; i++) {
        let curr = nums[i]
        let next = nums[i + 1]
        if (results.has(curr + next)) {
            return true
        } else {
            results.add(curr + next)
        }
    }
    return false
};