/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
    let obj = {}
    //find a key 
    for (let i = 0; i <= nums.length - 1; i++) {
        let num = nums[i]
        let nextNum = nums[i + 1]
        if (num === key)
            if (!(nextNum in obj)) {
                // save the next in obj
                obj[nextNum] = 1
            } else {
                // sum 1 to the value
                obj[nextNum]++
            }
    }

    let mostFrequent = [0, 0]
    for (const [key, val] of Object.entries(obj)) {
        // console.log(key, val)

        if (mostFrequent[1] < val) mostFrequent = [key, val]
    }

    return Number(mostFrequent[0])
};