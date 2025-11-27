/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
    let result = []
    let partial = 0

    for (let i = 0; i <= nums.length - 1; i++) {
        partial = (partial * 2) % 10
        partial = (partial+ nums[i])%10
        result.push(partial === 5 || partial === 0)

    }
    return result
};



const prefixesDivBy5 = (nums) => {
    let val = 0;

    for (let i = 0; i < nums.length; i++) {
        val = ((val << 1) + nums[i]) % 5;
        nums[i] = val === 0;
    }

    return nums;
};
