char_val = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}


class Solution:
    def romanToInt(self, s: str) -> int:

        total = 0

        for i in range(len(s)):
            if i < len(s) - 1 and char_val[s[i]] < char_val[s[i + 1]]:
                total -= char_val[s[i]]
            else:
                total += char_val[s[i]]

        return total
