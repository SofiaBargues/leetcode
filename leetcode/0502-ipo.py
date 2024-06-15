from heapq import heappush, heappop

class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        n = len(profits)
        if n == 0 or k == 0:
            return w
        projects = [(capital[i], profits[i]) for i in range(n)]
        projects.sort()
        maxHeap = []
        i = 0
        for _ in range(k):
            while i < n and projects[i][0] <= w:
                # Add to projects that can be afforded
                heappush(maxHeap, -projects[i][1])
                i+=1
            if maxHeap:
                gain = -heappop(maxHeap)
                w += gain
            else:
                break
        return w
            
