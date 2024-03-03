function threeSum(nums: number[]): number[][] {
    // O(n log(n))
    const triplets: [number,number,number][] = []
    nums.sort((a,b) => a-b)
    for(let i=0; i<nums.length; i++){
        if(nums[i] === nums[i-1]){
            continue
        }
        const num1 = nums[i]
        let l = i+1
        let r = nums.length -1
        while(l < r){
            const currSum = num1 + nums[l] + nums[r]
            if(currSum === 0){
                triplets.push([num1, nums[l], nums[r]])
                l++
                while(nums[l] == nums[l-1]){
                    l++
                }
            }else if(currSum < 0){
                l++
            }else{ // currSum > 0
                r--
            }
        }
    }
    return triplets
};


function threeSumBadPerf(nums: number[]): number[][] {
    // O(n log(n))
    const triplets: [number,number,number][] = []
    nums.sort((a,b) => a-b)
    nums = nums.filter((num, i, arr) => !(num === arr[i-1] && arr[i-1] === arr[i-2] && arr[i-2] === arr[i-3]) )
    console.log(nums)
    for(let i = 0; i< nums.length-2; i++){
        const num1 = nums[i]
        const target = -num1
        const seen = new Set<number>()
        for(let j = i+1; j< nums.length; j++){
            // combine all others (2-sum)
            const num2 = nums[j]
            const target2 = target - num2
            if(seen.has(target2)){
                triplets.push([num1, target2, num2])
            }else{
                seen.add(num2)
            }
        }
    }
    // Need to also filter repeated
    const tripletsSeen = new Set<string>()

    return triplets.filter(
        triplet => {
            const str = triplet.toString()
            if(!tripletsSeen.has(str)){
                tripletsSeen.add(str)
                return true
            }
            return false
        }
    )
};