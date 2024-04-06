class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda interval: interval[1])
        prev = [-float('inf'), -float('inf')]
        count = 0
        for interval in intervals:
            if interval[0] >= prev[1]:
                count+=1
                prev = interval
        return len(intervals) - count