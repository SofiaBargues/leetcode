class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total = sum(nums)
        if(total%2 != 0):
            return False
        target = total/2

        sumSet = set([0])

        for num in nums:
            newSet = set()
            for total in sumSet:
                if(total+num == target):
                    return True
                newSet.add(total+num)
            sumSet = sumSet | newSet
        return False