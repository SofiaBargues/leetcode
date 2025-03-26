/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
    max =-Infinity
    min = Infinity
    for (const num of nums) {
        if (max < num) max = num
        if (min > num) min = num
    }

    return nums.filter((x) => x != min && x != max).length
};