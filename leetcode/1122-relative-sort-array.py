from collections import Counter

class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        out = []
        counter = Counter(arr1)
        # arr1 to counter
        for num in arr2:
            out.extend([num]*counter[num])
            counter.pop(num)
        #  remove from counter, add to out
        # sort remaining counter keys
        rem = sorted(counter.keys())
        #  add to out 
        for num in rem:
            out.extend([num]*counter[num])
        return out
        
