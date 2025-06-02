/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
    let result = []
    for (let i = 0; i <= l.length - 1; i++) {
        let start = l[i]
        let end = r[i]
        let subArr = nums.slice(start, end + 1).sort((a, b) => a - b)
        let diff = subArr[1] - subArr[0]
        let flag = true
        for (let j = 1; j <= subArr.length - 2; j++) {
            if (subArr[j + 1] - subArr[j] != diff) {
                result.push(false)
                flag = false
                break
            }
        }
        if (flag) { result.push(true) }
    }

    return result
};

