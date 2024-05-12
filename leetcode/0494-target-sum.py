
class SolutionDFSDP:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        memo: Dict[Tuple[int, int], int] = {}
        def dfs(i: int, target: int) -> int:
            if i == len(nums):
                return target == 0

            curr = (i, target)
            if curr in memo:
                return memo[curr]

            memo[curr] = res = dfs(i+1, target-nums[i]) + dfs(i+1, target+nums[i])
            return res

        return dfs(0, target)