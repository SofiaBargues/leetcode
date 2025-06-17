

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let obj = {}
    let maxDeg = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        num = nums[i]
        if (!obj[num]) {
            obj[num] = { count: 1, first: i, last: null }
        } else {
            obj[num]["count"]++
            obj[num]["last"] = i
        }
        if (obj[num]["count"] > maxDeg) maxDeg = obj[num]["count"]
    }
    // console.log(obj, maxDeg)

    if (maxDeg === 1) return 1
    let resultObj = Object.values(obj).filter((x) => x["count"] === maxDeg)
    let result = Infinity
    for (let item of resultObj) {
        if ((item["last"] - item["first"]) < result) result = (item["last"] - item["first"])
    }
    // console.log(result)
    return result + 1
};