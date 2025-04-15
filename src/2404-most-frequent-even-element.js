/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let obj = {}
    for (let i = 0; i <= nums.length; i++) {
        let num = nums[i]
        if (num % 2 === 0) {
            if (num in obj) obj[num] = obj[num] + 1
            else obj[num] = 1
        }
    }
    if (Object.entries(obj).length === 0) return -1
    let result = [0, 0]
    //para cada elemento del obj 
    for (const [key, value] of Object.entries(obj))

        if (value > result[1]) result = [key, value]
        else if (value === result[1]) {
            if (key < result[0]) resut = [key, value]
        }
    
    return Number(result[0])
};