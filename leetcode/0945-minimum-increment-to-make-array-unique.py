class Solution:
    def minIncrementForUnique(self, nums: List[int]) -> int:
        # 0. increments = 0
        # 1. Sort the arr
        
        # 2. Iterate keeping track of last num

        # 2.a. If <= last num:
        #       Increase by diff +1 and update lastnum

        # return increments

        increments = 0
        last_num = -1
        nums.sort()
        for num in nums:
            if num<=last_num:
                diff = last_num+1 - num
                increments += diff
                last_num += 1
            else:
                last_num = num
        return increments