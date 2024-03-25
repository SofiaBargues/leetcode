from itertools import chain


class SolutionDpTopBottom:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        # Should do DP
        validLocations = [False]*(len(s)+1)

        validLocations[len(s)] = True

        for i in range(len(s)-1, -1, -1):
            for word in wordDict:
                wordEndIdx = len(word) + i
                if len(word) + i > len(s):
                    continue
                if not validLocations[wordEndIdx]:
                    continue

                if word == s[i:wordEndIdx]:
                    validLocations[i] = True
                    break

        return validLocations[0]

class SolutionDpBottomUp:
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