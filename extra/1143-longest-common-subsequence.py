class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        n = len(text1)
        m = len(text2)
        if n == 0 or m == 0:
            return 0

        dp = [[0]*m for i in range(n)]

        # fill first row
        dp[0][0] = int(text1[0] == text2[0])
        for i in range(1, n):
            dp[i][0] = max(dp[i-1][0], int(text1[i] == text2[0]))

        # fill first col
        for j in range(1, m):
            dp[0][j] = max(dp[0][j-1], int(text1[0] == text2[j]))

        for i in range(1, n):
            for j in range(1,m):
                if text1[i] == text2[j]:
                    dp[i][j] = dp[i-1][j-1] + 1
                else:
                    dp[i][j] = max(
                        dp[i-1][j],
                        dp[i][j-1]
                    )

        return dp[n-1][m-1]