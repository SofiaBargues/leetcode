
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    function swap(i, j) {
        let holder = nums[i]
        nums[i] = nums[j]
        nums[j] = holder

    }


    for (let i = 0; i <= nums.length - 1; i++) {
        let j = i - 1
        if (nums[i] === 0) {
            while (j >= 0 && nums[j] > 0) {
                swap(j + 1, j)
                j--
            }
        }
        else if (nums[i] === 1) {
            while (j >= 0 && nums[j] > 1) {
                swap(j + 1, j)
                j--
            }
        }
    }


};