from collections import defaultdict, Counter

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        l = r = 0
        min_substring = None
        tFreq = Counter(t)
        sFreq = defaultdict(lambda:0)
        to_be_taken = len(t)
        while r <= len(s)-1:
            rChar = s[r]
            if rChar in tFreq:
                sFreq[rChar]+=1
                if sFreq[rChar] <= tFreq[rChar]:
                    to_be_taken -= 1

            # If string found
            while to_be_taken == 0:
                # Account l char
                lChar = s[l]
                if lChar in tFreq:
                    sFreq[lChar] -= 1
                    if sFreq[lChar] < tFreq[lChar]:
                        # save string
                        if not min_substring or len(min_substring) > r-l+1:
                            min_substring = s[l:r+1]
                        to_be_taken+=1
                # Move left
                l+=1
            r+=1

        return min_substring if min_substring is not None else ""