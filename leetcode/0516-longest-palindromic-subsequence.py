# This is solvable with Longest Common Subsequence (LCS) algo between s and reverse(s)
# From Leetcode 1143
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        p = s[::-1]
        return self.longestCommonSubsequence(s, p)

    def longestCommonSubsequence(self, s1: str, s2: str) -> int:
        n, m = len(s1), len(s2)
        dp = [[0] * (m + 1) for _ in range(n + 1)]

        for i in range(n):
            for j in range(m):
                if s1[i] == s2[j]:
                    dp[i + 1][j + 1] = dp[i][j] + 1
                else:
                    dp[i + 1][j + 1] = max(dp[i + 1][j], dp[i][j + 1])

        return dp[n][m]

    def longestPalindromeSubseqRecursion(self, s: str) -> int:
        # This solution is not accepted in leetcode because of memory limits
        # But the theoretical space and time complexity is same as other solution O(n^2)
        max_length = 0
        memo = {}

        def expand(l: int, r: int) -> int:
            if l < 0 or r >= len(s):
                return 0
            if (l, r) in memo:
                return memo[(l, r)]

            result = None
            if s[l] == s[r]:
                result = expand(l - 1, r + 1) + 2
            else:
                result = max(expand(l - 1, r), expand(l, r + 1))
            memo[(l, r)] = result
            return result

        for i in range(len(s)):
            l = expand(i - 1, i + 1) + 1
            max_length = max(l, max_length)

        for i in range(len(s) - 1):
            if s[i] != s[i + 1]:
                continue
            l = expand(i - 1, i + 2) + 2
            max_length = max(l, max_length)

        return max_length
