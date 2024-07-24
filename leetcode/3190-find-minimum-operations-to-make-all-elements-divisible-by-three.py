class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        return len([1 for num in nums if num%3!=0])