# https://www.youtube.com/watch?v=HAA8mgxlov8


class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        memo = {}

        def dfs(i, j):
            if (i, j) in memo:
                return memo[(i, j)]

            if i >= len(s) and j >= len(p):
                return True
            elif j >= len(p):
                return False

            match = i < len(s) and (s[i] == p[j] or p[j] == ".")

            if j + 1 < len(p) and p[j + 1] == "*":
                result = dfs(i, j + 2) or (  # don't use *
                    match and dfs(i + 1, j)  # use *
                )
            elif match:
                result = dfs(i + 1, j + 1)
            else:
                result = False

            memo[(i, j)] = result
            return result

        return dfs(0, 0)
