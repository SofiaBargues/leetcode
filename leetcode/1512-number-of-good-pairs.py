class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        mem = {}
        pairs = 0
        for i, num in enumerate(nums):
            if num in mem: 
                pairs += mem[num]
                mem[num] += 1
            else: 
                mem[num] = 1

        return pairs