from collections import defaultdict

class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        anagrams_starts: List[int] = []
        p_chars = defaultdict(lambda:0)
        for char in p:
            p_chars[char] -= 1

        for i, char in enumerate(s):
            p_chars[char] += 1
            start_idx = i-(len(p)-1)
            # Check string

            if all([val == 0 for val in p_chars.values()]):
                anagrams_starts.append(start_idx)

            # Move window left pointer
            if start_idx >= 0:
                p_chars[s[start_idx]] -= 1

        return anagrams_starts