/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
 
    nums.sort((a,b)=> a-b)
    let result=[]
    for (let i=0;i<=nums.length-1;i++){
        num=nums[i]
        if (num===target){
        result.push(i)
        }
    }
    return result    
    };