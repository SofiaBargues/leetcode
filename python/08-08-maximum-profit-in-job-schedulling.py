from collections import defaultdict
from bisect import bisect_left, bisect
class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        memo: Dict[int, int] = {}

        intervals =  sorted(zip(startTime, endTime, profit))

        def dfs(idx):
            if idx == len(intervals):
                return 0

            if idx in memo:
                return memo[idx]

            # Consider it
            # Find start time at end time
            j = bisect(
                intervals, # intervals
                (intervals[idx][1], -1, -1), # end time
                lo=idx
                )
            profit_with = dfs(j) + intervals[idx][2]

            # Don't consider it
            profit_without = dfs(idx+1)

            memo[idx] = res = max(profit_with, profit_without)
            return res
        
        return dfs(0)