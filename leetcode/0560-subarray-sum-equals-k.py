from itertools import accumulate
from collections import defaultdict


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        result = 0
        prefix_sum = 0
        d = defaultdict(int)
        d[0] = 1

        for num in nums:
            prefix_sum += num
            if prefix_sum - k in d:
                result += d[prefix_sum - k]
            d[prefix_sum] += 1
        return result
