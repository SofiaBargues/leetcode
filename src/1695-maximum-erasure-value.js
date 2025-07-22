
var maximumUniqueSubarray = function (nums) {
    let l = 0
    let set = new Set()
    let maxScore=0
    for (let r = 0; r <= nums.length - 1; r++) {
        let num = nums[r]
        while (set.has(num)) {
            set.delete(nums[l])
            l++
        }
        set.add(num)
        maxScore = Math.max(maxScore, nums.slice(l, r + 1).reduce((acc, curr) => acc + curr, 0))
    }
    return maxScore
};
