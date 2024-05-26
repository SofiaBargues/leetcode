from typing import List
from itertools import accumulate


class Solution:
    def totalStrengthBadRuntime(self, strength: List[int]) -> int:
        total = 0
        n = len(strength)
        prefix_sum = [0]
        curr_sum = 0
        for st in strength:
            curr_sum += st
            prefix_sum.append(curr_sum)

        for l in range(1, n + 1):
            for s in range(0, n - l + 1):
                subarr = strength[s : s + l]
                s = prefix_sum[s + l] - prefix_sum[s]
                weakest = min(subarr)
                total += weakest * s
        return total % (10**9 + 7)

    # Explanation
    # https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/4126423/this-problem-needs-to-labelled-as-banished-at-interviews-ok-for-education-competions/
    def totalStrength(self, strength: List[int]) -> int:
        """
        This is the editorial solution. NOT MINE.
        """
        mod, n = 10**9 + 7, len(strength)

        # Get the first index of the non-larger value to strength[i]'s right.
        right_index = [n] * n
        stack = []
        for i in range(n):
            while stack and strength[stack[-1]] >= strength[i]:
                right_index[stack.pop()] = i
            stack.append(i)

        # Get the first index of the smaller value to strength[i]'s left.
        left_index = [-1] * n
        stack = []
        for i in range(n - 1, -1, -1):
            while stack and strength[stack[-1]] > strength[i]:
                left_index[stack.pop()] = i
            stack.append(i)

        # prefix sum of the prefix sum array of strength.
        presum_of_presum = list(accumulate(accumulate(strength, initial=0), initial=0))
        answer = 0
        # For each element in strength, we get the value of R_term - L_term.
        for i in range(n):
            # Get the left index and the right index.
            left_bound = left_index[i]
            right_bound = right_index[i]

            # Get the left_count and right_count (marked as L and R in the previous slides)
            left_count = i - left_bound
            right_count = right_bound - i

            # Get positive presum and the negative presum.
            neg_presum = (
                presum_of_presum[i + 1] - presum_of_presum[i - left_count + 1]
            ) % mod
            pos_presum = (
                presum_of_presum[i + right_count + 1] - presum_of_presum[i + 1]
            ) % mod

            # The total strength of all subarrays that have strength[i] as the minimum.
            answer += strength[i] * (pos_presum * left_count - neg_presum * right_count)
            answer %= mod

        return answer
