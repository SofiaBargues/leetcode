from heapq import heapify, heappop

class Solution:
    def minDifference(self, nums: List[int]) -> int:
        if len(nums) <= 4:
            return 0

        largests = []
        not_nums = [-1* num for num in nums]
        heapify(not_nums)
        for _ in range(4):
            largests.append(-heappop(not_nums))

        smallest = []
        heapify(nums)
        for _ in range(4):
            smallest.append(heappop(nums))

        differences = []
        for i in range(len(largests)):
            differences.append(largests[i]-smallest[3-i])

        return min(differences)
