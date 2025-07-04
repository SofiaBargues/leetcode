
/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    let setNums = new Set(nums)
    let equalSide = setNums.size 
    if(equalSide === 1){
        return "equilateral"
    }
    if(nums[0]+nums[1] > nums[2] 
        && nums[0] + nums[2] > nums[1] 
        && nums[1] + nums[2] > nums[0] 
    ){
        if(equalSide === 2){
            return "isosceles"
        }else{
            return "scalene"
        }
    }else{
        return "none"
    }
};
