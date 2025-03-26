/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
    let obj = {}
    for (const num of nums) {
        if (num in obj){
            obj[num] = obj[num]+1
            if (obj[num]>=3)return false 
        } else {
           obj[num] = 1
        }
    }
    
    return  true
};