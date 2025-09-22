
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {





    let obj = {}
    let maxFrec = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        if (obj[nums[i]]) { obj[nums[i]]++ }
        else { obj[nums[i]] = 1 }
        if ( obj[nums[i]]> maxFrec) maxFrec =  obj[nums[i]]
    }

    return Object.values(obj).filter((x) => x === maxFrec).reduce((acc, curr) => acc + curr, 0)


}











// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxFrequencyElements = function(nums) {
//     let obj={}
//     for(const num of nums){
//         if (num in obj){
//             obj[num]=obj[num]+1
//         }else {
//             obj[num]=1
//         }
//     }

//     let frequencies=Object.values(obj).sort((a,b)=>b-a)
//     let total= frequencies.filter(num=>num=== frequencies[0]).reduce((a,b)=> a+b, 0)
//     return total
// };
