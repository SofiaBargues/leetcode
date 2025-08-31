
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let total = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        if (i === nums.length - 3) {
            if (nums[i] === 0 && nums[i + 1] === 0 && nums[i + 2] === 0) {
                total++
                return total
            } else if (nums[i] === 1 && nums[i + 1] === 1 && nums[i + 2] === 1) {
                return total
            } else {
                return -1
            }
        } else if (nums[i] === 0) {

            if (nums[i + 1] === nums[i]) {
                nums[i + 1] = 1
            } else { nums[i + 1] = 0 }

            if (nums[i + 2] === nums[i]) {
                nums[i + 2] = 1
            } else { nums[i + 2] = 0 }

            nums[i] = 1

            total++
        }

    }
};
