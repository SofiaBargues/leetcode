class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        index = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[index] = nums[i]
                index += 1
        return index


class SolutionTwoPointers:
    def removeElement(self, nums: List[int], val: int) -> int:
        n = len(nums)
        e = n-1
        i = 0
        while i<=e:
            if nums[e] == val:
                # skip elements right side
                e-=1
                continue
            if nums[i] == val:
                nums[e], nums[i] = nums[i], nums[e]
                e-=1
            i+=1
        return e+1

