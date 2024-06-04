class Solution:
    def longestPalindrome(self, s: str) -> int:
        seen = set()
        total = 0
        for char in list(s):
            if char in seen:
                seen.remove(char)
                total += 2
            else:
                seen.add(char)
        odd_correction = 1 if len(seen) else 0
        return total + odd_correction
