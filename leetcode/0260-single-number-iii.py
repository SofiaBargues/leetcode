class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
        xor_result = 0
        for num in nums:
            xor_result ^= num

        distinguishing_bit = xor_result ^ -xor_result

        group_1, group_2 = 0, 0
        for num in nums:
            if num and num & distinguishing_bit:
                group_1 ^= num
            else:
                group_2 ^= num
        return [group_1, group_2]
