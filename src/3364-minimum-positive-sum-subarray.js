/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
    let sum = Infinity
    for (let i = 0; i <= nums.length - l; i++) {
        let currSum = nums.slice(i, l + i - 1).reduce((curr, acc) => curr + acc, 0)
       console.log("currSum", currSum) 
        for (let j = l + i-1; j < i + r; j++) {
            currSum = currSum + nums[j]
            console.log(currSum)
            if (currSum < sum && currSum > 0) sum = currSum
        }
    }
    return sum === Infinity ? -1 : sum
};

