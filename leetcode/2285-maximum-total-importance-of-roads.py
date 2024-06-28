from collections import defaultdict


class Solution:
    def maximumImportance(self, n: int, roads: List[List[int]]) -> int:
        # Count cities occurences in roads
        cities_freq = defaultdict(int)
        for start, end in roads:
            cities_freq[start]+=1
            cities_freq[end]+=1

        # Sort occurrences freq
        freqs = sorted(list(cities_freq.values()), reverse=True)

        # Multiply freq * range(n)
        total = 0
        for val, freq in zip(range(n, n-len(freqs), -1), freqs):
            total += (val)*freq
        return total