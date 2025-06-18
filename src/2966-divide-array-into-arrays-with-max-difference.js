/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
    let sortedNums = nums.sort((a, b) => a - b)
    let result = []
    for (let i=0; i<=sortedNums.length-1;i+=3) {
        let subArr = sortedNums.slice(i, 3+i)
        if (subArr[2] - subArr[0] > k) return []
        else result.push(subArr)
    }
    return result
};

