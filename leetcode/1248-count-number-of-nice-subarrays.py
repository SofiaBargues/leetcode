class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        nums = [num % 2 for num in nums]
        prefix = []

        prefix_count = [0] * (len(nums)+1)
        prefix_count[0] = 1

        curr = 0
        subs = 0

        for num in nums:
            curr+=num 
            if curr >= k:
                subs += prefix_count[curr-k]
            prefix_count[curr]+=1

        return subs


        return subs