/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
    let result = []
    let numsIndexed0dd = []
    let numsIndexedEven = []
    for (let i = 0; i <= nums.length - 1; i++) {
        if (i % 2 === 0) numsIndexedEven.push(nums[i])
        else numsIndexed0dd.push(nums[i])
    }

    numsIndexed0dd.sort((a, b) => b - a)
    numsIndexedEven.sort((a, b) => a - b)
    let l = Math.min(numsIndexedEven.length, numsIndexed0dd.length)
    for (let i = 0; i <= l - 1; i++) {
        result.push(numsIndexedEven[i])
        result.push(numsIndexed0dd[i])
    }
    
     if (numsIndexed0dd.length < numsIndexedEven.length) result.push(numsIndexedEven[numsIndexedEven.length - 1])
    return result
};