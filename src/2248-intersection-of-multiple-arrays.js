/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
    let firstSet = new Set(nums[0])
    for (let i = 0; i <= nums.length - 1; i++) {
        let secondSet = new Set(nums[i])
        firstSet = secondSet.intersection(firstSet)
    }
    return Array.from(firstSet).sort((a,b)=> a-b)
};