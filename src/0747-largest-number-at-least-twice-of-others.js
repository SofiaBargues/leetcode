/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let big = [0, 0]
    let secondBig = [0, 0]
    for (let i = 0; i <= nums.length - 1; i++) {
        let num = nums[i]
        if (num > big[0]) {
            secondBig = big
            big = [num, i]
        } else if (num > secondBig[0]) secondBig = [num, i]
    }
    if ((secondBig[0] * 2) <= big[0]) return big[1]
    return -1
};