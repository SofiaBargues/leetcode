from collections import deque
class Solution:
    def minKBitFlips(self, nums: List[int], k: int) -> int:
        n = len(nums)
        switchs = 0
        next_reverse = deque()
        expected = 1
        for i in range(n):
            if next_reverse and i == next_reverse[0]:
                expected = (expected+1) % 2
                next_reverse.popleft()

            if nums[i] != expected:
                next_reverse.append(i+k)
                expected = (expected+1) % 2
                switchs+=1
                if i > n-k:
                    return -1
        return switchs
        