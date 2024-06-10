class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        expected = sorted(heights)
        diff_count = 0
        for h, exp in zip(heights, expected):
            if h != exp:
                diff_count+=1
        return diff_count


class SolutionOneliner:
    def heightChecker(self, heights: List[int]) -> int:
        return sum(1 if h != exp else 0 for  h, exp in zip(heights, sorted(heights)))