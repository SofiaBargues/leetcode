/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
    let l = nums.length
    let result = []

    for (let s = 0; s + k <= l; s++) {
        let obj = {}
        let kNums = nums.slice(s, s + k)
        for (num of kNums) {
            if (num in obj) obj[num] = obj[num] + 1
            else obj[num] = 1
        }
        let sortedArrKV = Object.entries(obj).sort(([keyA, valA], [keyB, valB]) => {
            if (valA != valB) return valB - valA
            else return keyB - keyA
        })
        let xElements = sortedArrKV.slice(0, x)
        result.push(xElements.map(([k, v]) => k * v).reduce((acc, curr) => acc + curr, 0))
    }

    return result

};