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


/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    let left = nums[0]
    let right = nums.slice(1, nums.length).reduce((acc, curr) => acc + curr, 0)
    let i = 0
    let total = 0
    while (right != 0) {
        if ((right - left) % 2 === 0) total++
        i++
        left += nums[i]
        right -= nums[i]
    }
    return total
};

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