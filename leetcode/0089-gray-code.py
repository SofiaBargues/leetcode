# 0. 2^n len
# 1. Unique elements
# 2. Range [0, 2^n-1]
# 3. Adj elements differ in 1 binary bit
#   a. Also aplies between first and last

# Given n, return any valid n-bit gray code seq

# Example:
# 2 -> [00,01,11,10] or [00,10,11,01]
# 3 -> [000,010,110,100,101,111,011,001]
#        0   1   2   1   2   3   2   1

# Greedy
# 0. start seen set
# 1. for all the range
# 2. Try shifting 1 number with xor and if not in range, use it

# There is a math proof why this always work, but not a great thing to figure out in the moment


class Solution:
    def grayCode(self, n: int) -> List[int]:
        used = set()
        ans = [0]
        used.add(0)
        for _ in range(1 << n):
            for x in range(n):
                if (1 << x) ^ ans[-1]:
                    num = (1 << x) ^ ans[-1]
                    if num not in used:
                        ans.append(num)
                        used.add(num)
                        break
        return ans
