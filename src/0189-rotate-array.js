/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k%nums.length
    let start = nums.slice(0, nums.length - k)
    let end = nums.slice(nums.length - k, nums.length)
    let arr = end.concat(start)
    for (let i = 0; i <= nums.length-1; i++) {
        nums[i]= arr[i] 
    }
};