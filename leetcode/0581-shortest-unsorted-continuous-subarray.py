class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        if not n:
            return 0
        min_arr = [None] * n
        min_arr[n - 1] = nums[n - 1]
        for i in range(n - 2, -1, -1):
            min_arr[i] = min(nums[i], min_arr[i + 1])

        max_arr = [None] * n
        max_arr[0] = nums[0]
        for i in range(1, n):
            max_arr[i] = max(nums[i], max_arr[i - 1])

        l = 0
        while l < n - 1 and nums[l] <= min_arr[l + 1]:
            l += 1

        r = n - 1
        while r > 0 and nums[r] >= max_arr[r - 1]:
            r -= 1

        return r - l + 1 if r > l else 0
