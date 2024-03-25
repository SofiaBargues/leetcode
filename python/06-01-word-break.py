from itertools import chain




class Solution2:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        # Should do DP
        wordSet = set(wordDict)
        lengths = list(set([len(word) for word in wordDict if len(word)]))

        validLocations = [False]*(len(s)+1)

        validLocations[0] = True

        # S
        for i in range(len(s)):
            if not validLocations[i]:
                continue
            # W
            for length in lengths:
                if length + i > len(s):
                    continue
                if validLocations[i+length]:
                    # Already valid (avoid dupplciated searchs)
                    continue

                substr = s[i:i+length]
                if substr in wordSet:
                    validLocations[i+length] = True


        return validLocations[len(s)]