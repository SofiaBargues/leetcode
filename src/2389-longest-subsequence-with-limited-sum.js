

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
    nums.sort((a, b) => a - b)
    console.log(nums)
    let result = []
    for (let i = 0; i <= queries.length - 1; i++) {
        let query = queries[i]
        let acc = 0
        let total = 0
        for (const num of nums) {
            if ((acc + num) <= query) {
                total++
                acc += num
            } else {
                break
            }
        }
        result.push(total)
    }
    return result
};