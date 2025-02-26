/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let oneIndexes = []
    for (let i = 0; i <= nums.length - 1; i++) {
        let num = nums[i]
        if (num === 1) oneIndexes.push(i)
    }

    for (let i = 0; i <= oneIndexes.length - 1; i++) {
        let first = oneIndexes[i]
        let second = oneIndexes[i + 1]
        if ((second - (first + 1)) < k)
            return false
    }
return true 
};

