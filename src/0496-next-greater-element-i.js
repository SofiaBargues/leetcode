/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let index = {}
    for (let i = 0; i <= nums2.length - 1; i++) {
        let num = nums2[i]
        index[num] = i
    }

    let ans = []
    for (let i = 0; i <= nums1.length -1; i++) {
        let num = nums1[i]
        let j = index[num]
        for (j; j <= nums2.length - 1; j++) {
            if (nums2[j] > num) {
                ans.push(nums2[j])
                break
            }
        }
        if (i === ans.length) {
            ans.push(-1)
        }
    }
    return ans
};

