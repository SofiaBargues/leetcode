class Solution:
    def reverse(self, x: int) -> int:
        s = str(-x) if x < 0 else str(x)
        r = "".join(reversed(s))
        sign = -1 if x < 0 else 1
        n = sign * int(r)
        if n < -(2**31) or n > 2**31 - 1:
            return 0
        return n
