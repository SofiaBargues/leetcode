from collections import defaultdict


class Solution:
    def count_subarrays(self, numbers: List[int], divisor: int) -> int:
        prefix_sums = defaultdict(int)
        prefix_sums[0] = 1
        current_sum = 0
        count = 0
        for num in numbers:
            current_sum += num
            if divisor != 0:
                current_sum %= divisor
            count += prefix_sums[current_sum]
            prefix_sums[current_sum] += 1
        return count
