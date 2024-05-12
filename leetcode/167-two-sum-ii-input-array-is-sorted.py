from bisect import bisect_left, bisect_right


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        if not numbers:
            return []
        left = 0
        right = len(numbers) - 1
        while left < right:
            current_sum = numbers[left] + numbers[right]
            if current_sum == target:
                return [left + 1, right + 1]

            if current_sum < target:
                left = bisect_left(
                    numbers, x=target - numbers[right], lo=left + 1, hi=right
                )
            else:
                right = bisect_right(
                    numbers, x=target - numbers[left], lo=left, hi=right - 1
                )
