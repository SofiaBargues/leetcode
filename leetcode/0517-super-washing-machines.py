from itertools import accumulate


class Solution:
    def findMinMoves(self, machines: List[int]) -> int:
        avg, rem = divmod(sum(machines), len(machines))
        if rem:
            return -1
        machines = [m - avg for m in machines]
        return max(max(machines), max(map(abs, accumulate(machines))))
