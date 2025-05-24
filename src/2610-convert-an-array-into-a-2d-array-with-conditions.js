
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    let arrResult = []
    for (const num of nums) {
        for (let i = 0; i <= arrResult.length; i++) {
            let arr = arrResult[i]
            console.log("i", i, "set", arr)
            if (!arr) {
                arrResult.push(new Set([num]))
                break
            } else if (!arr.has(num)) {
                arr.add(num)
                break
            }
        }
    }
    return arrResult.map((x) => Array.from(x))
};
