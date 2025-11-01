

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    let set = new Set([])
    let result = []
    for (const num of nums) {
        if (set.has(num)) result.push(num)
        else set.add(num)
    }
    return result
};  