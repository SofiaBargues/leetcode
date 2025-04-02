/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
    let total = 0

    for (i = 0; i <= nums.length - 4; i++) {
        for (j = i + 1; j <= nums.length - 3; j++) {
            for (k = j + 1; k <= nums.length - 2; k++) {
                for (l = k + 1; l <= nums.length - 1; l++) {
                    let num1 = nums[i]
                    let num2 = nums[j]
                    let num3 = nums[k]
                    let num4 = nums[l]
                    if (num1 + num2 + num3 === num4) total++
                }
            }
        }
    }
    return total
};