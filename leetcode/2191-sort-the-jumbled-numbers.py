class Solution:
    def sortJumbled(self, mapping: List[int], nums: List[int]) -> List[int]:
        def mapInt(num: int) -> int:
            num_r = str(num)
            key = 0
            for c in num_r:
                key *= 10
                key += mapping[int(c) % 10]
            return  key
        
        indexed = sorted([(mapInt(num), i, num) for i, num in enumerate(nums)])
        return [num for _, _, num in indexed]
 