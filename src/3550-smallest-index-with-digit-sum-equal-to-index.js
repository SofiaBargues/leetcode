

/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    function sumOfDig(num) {
        return String(num).split("").map((x) => Number(x)).reduce((acc, curr) => acc + curr, 0)
    }

    for (let i = 0; i <= nums.length - 1; i++) {
        let num = nums[i]
        if (sumOfDig(num) === i) return i
    }
    return -1
};