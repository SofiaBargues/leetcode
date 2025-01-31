/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {

    let currSum = 0
    let sum = nums.reduce((curr, acc) => curr + acc, 0)
    let result = 0
    //para cada numero
    for (let i = 0; i <= nums.length - 2; i++) {
        currSum = nums[i] + currSum
        sum = sum - nums[i]
        //chqueo si currSum y sum ambos son pares
        if ((sum - currSum) % 2 === 0) {
            //sumo uno a result
            result++
        }
    }
    return result
};