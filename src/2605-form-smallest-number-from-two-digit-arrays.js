/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
   let  smallest = Infinity
   let  sNum1 = Infinity
   let  sNum2 = Math.min(...nums2)
   let  set = new Set(nums2)
    for (const num of nums1) {
        if (num < sNum1) sNum1 = num
        if (set.has(num) && num < smallest) smallest = num
    }

    if (smallest != Infinity) return smallest
    if (sNum1 > sNum2) return Number([sNum2, sNum1].map((x) => String(x)).join(""))
    else return Number([sNum1, sNum2].map((x) => String(x)).join(""))

};

