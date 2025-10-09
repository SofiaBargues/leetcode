/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {


    function nonDecreasing(arr) {
        for (let i = 1; i < arr.length; i++) {
            let num1 = nums[i - 1]
            let num2 = nums[i]
            if (num1 > num2) {
                return false
            }
        }
        return true
    }
let total=0
    while (!nonDecreasing(nums)) {
        let smallSum = Infinity
        let indexes = [0, 0]
        for (let i = 1; i < nums.length; i++) {

            let num1 = nums[i - 1]
            let num2 = nums[i]
            if ((num1 + num2) < smallSum) {
                smallSum = num1 + num2
                indexes = [i - 1, i]
            }
        }
        nums.splice(indexes[0], 2, smallSum)
        total++
    }
    return total
};

