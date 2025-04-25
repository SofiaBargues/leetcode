/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
    //encuentro el numero mas grande
    let n = Math.max(...nums)
    let l = nums.length
    if (l != n + 1) return false
    else {
        //oredeno nums
        nums.sort((a, b) => a - b)
        //chequeo que sus nums sean del uno al n y el ulrimo sea === n
        for (let i = 0; i <= nums.length - 1; i++) {
            let num = nums[i]
            if (i === nums.length - 2) {
                if (nums[i] === n && nums[i + 1] === n) return true
                return false
            }
            else if (num != i + 1) return false
        }
    }

};