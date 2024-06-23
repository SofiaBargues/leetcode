from collections import deque

class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        dec_q = deque()
        inc_q = deque()
        max_len = 0
        left = 0

        for right, num in enumerate(nums):
            while dec_q and num > dec_q[-1]:
                dec_q.pop()
            dec_q.append(num)
            
            while inc_q and num < inc_q[-1]:
                inc_q.pop()
            inc_q.append(num)

            while dec_q[0] - inc_q[0] > limit:
                if dec_q[0] == nums[left]:
                    dec_q.popleft()

                if inc_q[0] == nums[left]:
                    inc_q.popleft()

                left+=1
            
            max_len = max(max_len, right-left+1)
        return max_len