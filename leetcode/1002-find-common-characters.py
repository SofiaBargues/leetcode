from collections import Counter


class Solution:
    # a nicer solution that uses Counter features
    def commonChars(self, words: List[str]) -> List[str]:
        min_freq = Counter(words[0])
        for word in words:
            min_freq &= Counter(word)
        return list(min_freq.elements())


class SolutionRaw:
    def commonChars(self, words: List[str]) -> List[str]:
        if not words:
            return []

        def min_counter(counter_1, counter_2):
            out = {}
            for k in counter_1:
                if k in counter_2:
                    out[k] = min(counter_1[k], counter_2[k])
            return out

        curr_count = Counter(words[0])
        for i in range(1, len(words)):
            word = words[i]
            new_count = Counter(word)
            curr_count = min_counter(curr_count, new_count)

        out = []
        for k, v in curr_count.items():
            out.extend([k] * v)
        return out
