/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length === 1) return true
    if (nums[0] === 0) return false
    let start = 0
    let end = 1
    //for ech num of nums 
    for (let i = 0; i <= nums.length - 1; i++) {
        //si su indice es <= end 
        if (i <= end) {
            //si su indice+valor > end
            if (i + nums[i] > end) {
                //end =su indice+valor 
                end = i + nums[i]
            }
        } else {
            return false
        }
    }
    return true
};