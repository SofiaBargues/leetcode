/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b)=> a-b)
    let last= nums.length-1
    return Math.abs((nums[0]*nums[1])-(nums[last]*nums[last-1]))
    };

    