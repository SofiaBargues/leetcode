/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    let result = 0
    let k = nums.length - 1
    while (k >= 2) {
        for (let i = 0; i <= k - 2; i++) {
            for (let j = i + 1; j <= k - 1; j++) {
                let total = (nums[i] - nums[j]) * nums[k]
                if (total > result) {

                    result = total
                }
            }
        }
        k--
    }

    return result
};