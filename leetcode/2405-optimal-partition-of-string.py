class Solution:
    def partitionString(self, s: str) -> int:
        count = 1
        seen = set()
        for i in range(len(s)):
            c = s[i]
            if c in seen:
                # Partition, count reset
                count += 1
                seen = set([c])
            else:
                seen.add(c)

        return count
