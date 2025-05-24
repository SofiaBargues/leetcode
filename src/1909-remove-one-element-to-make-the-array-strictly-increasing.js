var canBeIncreasing = function (nums) {
    let acc = 0;
    for (let i = 1; i <= nums.length - 1; i++) {
        if (nums[i - 1] >= nums[i]) {
            if (acc === 1) break
            else acc++
            if (i > 1 && nums[i - 2] >= nums[i]) {
                nums[i] = nums[i - 1]
            }
        }
    }

    return acc < 2;
};