/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    let l = nums.length
    //     -1
    while (l >= 0) {
        //    2
        let total = 0
        for (let i = 0; i <= nums.length - 1; i++) {
            if (nums[i] >= l) total++
        }
        if (total === l) {
            return total
        } else {
            l--
            total = 0
        }
    }
    return -1
};