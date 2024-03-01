function majorityElement(nums: number[]): number {
    const counter = new Map<number,number>()
    for(let i=0; i<nums.length; i++){
        const num = nums[i]
        if(counter.has(num)){
            counter.set(num, counter.get(num)! +1)
        }else{
            counter.set(num, 1)
        }
    }

    const max = Array.from(counter.entries()).reduce<[number, number]>((acc, curr) => {
        if(acc[1] > curr[1]){
            return acc
        }else{
            return curr
        }
    }, [NaN, 0])
    return max[0]
};