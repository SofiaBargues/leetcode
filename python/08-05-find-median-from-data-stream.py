import heapq

class MedianFinder:

    def __init__(self):
        self.minheap = []
        self.maxheap = []

    def addNum(self, num: int) -> None:
        if self.maxheap and num <  -1 *  self.maxheap[0]:
            heapq.heappush(self.maxheap,  -1 * num)
        else:
            heapq.heappush(self.minheap, num)

        # Rebalance
        if len(self.minheap) - len(self.maxheap) > 1:
            element = heapq.heappop(self.minheap)
            heapq.heappush(self.maxheap,  -1 * element)
        elif len(self.maxheap) - len(self.minheap)  > 1:
            element =  -1 *  heapq.heappop(self.maxheap)
            heapq.heappush(self.minheap, element)

    def findMedian(self) -> float:
        if len(self.minheap) > len(self.maxheap):
            return self.minheap[0]
        elif len(self.maxheap) > len(self.minheap):
            return  -1 * self.maxheap[0]
        else:
            return (self.minheap[0] +  -1 * self.maxheap[0]) /2

# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()