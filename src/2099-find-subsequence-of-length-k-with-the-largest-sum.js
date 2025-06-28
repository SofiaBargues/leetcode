

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
    let obj = {}
    for (let i = 0; i <= nums.length - 1; i++) {
        let num = nums[i]
        obj[i] = num
    }

    let arrRes = Object.entries(obj).sort((a, b) => a[1] - b[1]).slice(nums.length - k)
    
 arrRes.sort((a, b) => a[0] - b[0])

    let result = []
    // console.log(arrRes)
    // console.log(result)
    for (const [index, value] of arrRes) {
        // console.log([index, value])
        result.push(value)
    }

    // console.log(result)
    return result

};