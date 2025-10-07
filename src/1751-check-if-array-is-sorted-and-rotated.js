

/**
 * @param {number[]} nums
 * @return {boolean}
 */

function arrsEquals (arr1, arr2){
    if(arr1.length!= arr2.length)return false 
    for(let i=0;i<= arr1.length-1;i++){
        if (arr1[i]!=arr2[i])return false
    }
    return true 
}
var check = function (nums) {

    let sortedNums = [...nums].sort((a, b) => a - b)

    if (arrsEquals(nums, sortedNums)) return true

    let i = 0
    while (nums[i] <= nums[i + 1]) {
        i++
    }
    let newArr=[...nums.slice(i + 1, nums.length), ...nums.slice(0, i + 1)]

    if (arrsEquals( newArr, sortedNums)) return true

    return false
};