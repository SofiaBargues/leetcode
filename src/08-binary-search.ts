function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length-1
    // Range [left, right]
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(target === nums[mid]){ return mid}
        if(nums[mid] > target){
            right = mid-1
        }else{
            left = mid+1
        }
    }
    return -1
};

