function findKthLargest(nums: number[], k: number): number {
    // Quickselect
    // Partition the array around a pivot
    function partition(left: number, right: number, pivotIndex: number){
        const pivot = nums[pivotIndex];
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]]
        let storedIndex = left
        for(let i=left; i<right; i++){
            if(nums[i] < pivot){
                [nums[storedIndex], nums[i]] = [nums[i], nums[storedIndex]]
                storedIndex++
            }
        }
        [nums[storedIndex], nums[right]] = [nums[right], nums[storedIndex]]
        return storedIndex
    }

    let left = 0, right = nums.length - 1;
    while(true){
        // Select new index
        const pivotIndex = left + Math.floor(Math.random() * (right-left+1))
        const newPivotIndex = partition(left, right, pivotIndex);
        if(newPivotIndex === nums.length-k){
            return nums[newPivotIndex]
        }else if(newPivotIndex > nums.length-k){
            right = newPivotIndex-1
        }else{
            left = newPivotIndex+1
        }

    }

    // Searches for the kth largest in the partition
    // Linear for average case and best case
};

function findKthLargestBruteForce(nums: number[], k: number): number {
    // Easiest (nlogn)
    nums.sort((a,b)=> b-a)
    return nums[k-1]
};





function findKthLargestHeap(nums: number[], k: number): number {
    // Heapify nums
    // Pop K elements and keep the kth
    // What time is heapify and pop?
    // But creating a heap in JavaScript is too much for an interview
};