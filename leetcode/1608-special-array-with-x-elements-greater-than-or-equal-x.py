from collections import defaultdict


class Solution:
    def specialArray(self, nums: List[int]) -> int:
        freq = defaultdict(int)
        n = len(nums)

        for num in nums:
            freq[min(num, n)] += 1

        greater_equal_than_count = 0
        for i in range(n, 0, -1):
            greater_equal_than_count += freq[i]
            if greater_equal_than_count == i:
                return i
        return -1
