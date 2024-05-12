function maxSubArray(nums: number[]): number {
    let max = -Infinity
    let currMax = 0
    nums.forEach((num) => {
        currMax += num
        if(currMax > max){
            max = currMax
        }
        if(currMax < 0){
            currMax = 0
        }
    })

    return max
};



function maxSubArrayNaive(nums: number[]): number {
    let max = 0

    for(let i = 0; i<nums.length; i++){
        let localMax = 0
        for(let j = i; j<nums.length; j++){
            localMax += nums[j]
            if(localMax > max){
                max = localMax
            }
        }
    }
    return max
};