/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let maxDif = -1
    for (let i = 0; i <= nums.length - 2; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            //num[i]<num[j]?
            if (nums[i] < nums[j]) {
                //maxDif<num[j]-num[i]=> maxdif=num[j]-num[i]
                if (maxDif < nums[j] - nums[i]) maxDif = nums[j] - nums[i]
            }
        }
    }
    return maxDif
};