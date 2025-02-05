/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
    let result = []
    for (let i = 0; i <= nums.length - 2; i++) {
        let pref = new Set(nums.slice(0, i+1))
        let sufix = new Set(nums.slice(i + 1))
        console.log(pref.size, sufix.size)
        result.push(pref.size - sufix.size)
    }

    result.push(new Set(nums).size)
    return result
};