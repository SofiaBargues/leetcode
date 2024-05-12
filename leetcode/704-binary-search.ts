function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length-1
    // Range [left, right]
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        let current = nums[mid]
        if(current < target){
            left = mid+1
        }else if (current > target){
            right = mid-1
        }else{
            return mid
        }
    }
    return -1
};

function search2(nums: number[], target: number): number {
    let l = 0, r = nums.length-1, m; // declare l and r ptr, initialize mid ptr
    while (l <= r) {
      m = Math.floor((l+r)/2) // middle point between l and r ptrs
      if (nums[m] == target) return m
      else if (nums[m] < target) l = m+1 // check right half
      else r = m-1 // check left half
    }
    return -1
  };