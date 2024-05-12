class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        superset: List[List[int]] = [[]]

        for num in nums:
            new_subsets = []
            for subset in superset:
                new_subsets.append(subset + [num])
            superset.extend(new_subsets)

        return superset