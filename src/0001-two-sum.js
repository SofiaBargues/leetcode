/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numIndex = {}
    // check all nums
    for (let i = 0; i <= nums.length - 1; i++) {
        let difNum = target - nums[i]
        if (nums[i] in numIndex) {
            return [i, numIndexi[nums[]]]
        } 
         numIndex[difNum] = i
        }
    }