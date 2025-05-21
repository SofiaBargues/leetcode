
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
    let r = -1
    let l = 0
    let size = 0
    let max = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        // console.log("i", i, " nums[i]", nums[i])
        //fromar cadena
        // incrementar una cadena 
        if (nums[i - 1] % 2 != nums[i] % 2 && nums[i] <= threshold && size != 0) {
            r += 1
            // console.log("incrementar una cadena ")
        }
        // Empezar una cadena 
        else if (nums[i] % 2 === 0 && nums[i] <= threshold ) {
            r = i
            l = i
            // console.log("Empezar una cadena")
        } else {
            // reset l
            l = 0
            r = -1
        }
        // contar el largo 
        size = r - l + 1
        // acc max
        if (size > max) {
            max = size
            // console.log("acc max", max)
        }
    }
    return max
};
