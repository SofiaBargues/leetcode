class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        combinations = []

        def dfs(path, opened_num, closed_num):
            if closed_num > opened_num:
                return
            if opened_num > n:
                return

            if closed_num == n:
                combinations.append(path)

            # Open path
            dfs(path + "(", opened_num + 1, closed_num)

            # Close path
            dfs(path + ")", opened_num, closed_num + 1)

        dfs("", 0, 0)
        return combinations
