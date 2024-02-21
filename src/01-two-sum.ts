function twoSum(nums: number[], target: number): number[] {
    const registry = new Map()
    // [1,2,3] 4
    for(let i=0; i<nums.length; i++){
        let diff = target-nums[i] // 4-1 -> 3
        if(registry.has(diff)){
            return [registry.get(diff), i]
        }else{
            registry.set(nums[i], i) // {1: 0}
        }
    }
    return []
};