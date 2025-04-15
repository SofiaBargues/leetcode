/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let e = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        // si el previo al anterior y el anterior son ==== curr
        if (i >= 2 && nums[i] === nums[e - 2]) {
            continue
        }
        nums[e] = nums[i]
        e++
    }
console.log(nums)
    return e
};