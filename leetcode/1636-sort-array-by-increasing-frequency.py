from collections import Counter
class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        out = []
        for count, val_opposite in sorted([(count, -val) for val, count in Counter(nums).items()]):
            out.extend([-val_opposite]*count)
        return out