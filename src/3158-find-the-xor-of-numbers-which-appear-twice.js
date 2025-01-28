/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {

    let set = new Set()
    let result =0
    for (const num of nums) {
        if (!set.has(num)) {
            // si no esta lo agrego
            set.add(num)
        } else {
            // si esta
            // result=result^ curr
            result = result ^ num
        }
    }
    return result
};