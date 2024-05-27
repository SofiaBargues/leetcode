from typing import List


class Solution:
    def minTaps(self, n: int, ranges: List[int]) -> int:
        # Build intervals
        intervals = sorted([[i - ranges[i], i + ranges[i]] for i in range(n + 1)])
        curr_end = 0
        curr_start = 0
        i = 0
        tap_count = 0
        while curr_start < n:
            if i > n or intervals[i][0] > curr_start:
                if curr_start == curr_end:
                    # No progress, gap found
                    return -1
                curr_start = curr_end
                tap_count += 1
            else:
                if intervals[i][1] > curr_end:
                    curr_end = intervals[i][1]
                i += 1

        return tap_count
