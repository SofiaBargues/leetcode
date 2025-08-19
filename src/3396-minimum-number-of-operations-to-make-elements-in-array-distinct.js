
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {

    let result = new Set()
    for (let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i]
        if (result.has(num)) {
            //retunr 
            let n = i + 1
            return Math.ceil(n / 3)

        } else {
            result.add(num)
        }
    }
    return 0
};
