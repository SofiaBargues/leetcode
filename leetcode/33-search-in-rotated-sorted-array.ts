function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[l] <= nums[mid]) {
      // Left half is ordered. Decide with left half
      if (nums[l] <= target && target < nums[mid]) {
        // Is in ordered part
        r = mid - 1;
      } else {
        // Is in other part
        l = mid + 1;
      }
    } else {
      // right half is ordered. Decide with left half
      if (nums[mid] < target && target <= nums[r]) {
        // Is in ordered half
        l = mid + 1;
      } else {
        // Is in other half
        r = mid - 1;
      }
    }
  }
  return -1;
}
