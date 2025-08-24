/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function (nums) {

    let result = 0
    let totalSum = nums.reduce((curr, acc) => curr + acc, 0)
    let currSum = 0

    for (const num of nums) {
        console.log(totalSum, currSum)
        if (num > 0) {
            currSum += num
            totalSum -= num
        }
        else {
            if (totalSum === currSum) result += 2
            else if (Math.abs(totalSum - currSum) === 1) result += 1
        }
    }

    return result
};

