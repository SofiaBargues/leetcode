
//New
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    let maxDif = 0
    const l = nums.length
    for (let i = 0; i <= l - 1; i++) {
        let first = nums[i]
        let second = nums[(i + 1) % l]
        if (Math.abs(first - second) > maxDif) {
            maxDif = Math.abs(first- second)
        }
    }
    return maxDif
};


//Old
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    let maxDif = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        if (maxDif < (Math.abs(nums[i]- nums[(i + 1) % nums.length]))) {
            maxDif = Math.abs(nums[i] - nums[(i + 1) % nums.length])
        }

    }
    return maxDif
};