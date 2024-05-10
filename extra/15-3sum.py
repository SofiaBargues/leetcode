from bisect import bisect


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        if n < 3:
            return []
        nums = sorted(nums)

        triplets = []

        s = 0
        for s in range(n - 2):
            if s > 0 and nums[s] == nums[s - 1]:
                continue

            l = s + 1
            r = n - 1
            while l < r:
                current_sum = nums[s] + nums[l] + nums[r]
                if current_sum == 0:
                    triplets.append([nums[s], nums[l], nums[r]])
                    l += 1
                    while l < n and nums[l] == nums[l - 1]:
                        l += 1
                elif current_sum < 0:
                    l += 1
                else:
                    r -= 1

        return triplets
