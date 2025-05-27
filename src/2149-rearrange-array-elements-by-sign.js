
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let negative = []
    let positive = []
    for (const num of nums) {
        if (num >= 0) {
            positive.push(num)
        } else {
            negative.push(num)
        }
    }

    let result = []
    let i = 0
    while (i <= positive.length - 1 && i <= negative.length - 1) {
        result.push(positive[i])
        result.push(negative[i])
        i++
    }
   
    return result
};
