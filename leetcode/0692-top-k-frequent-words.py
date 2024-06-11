from collections import Counter
from heapq import heappop, heapify

class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        counter = Counter(words)
        items = [(-count, word) for  word, count  in  counter.items()]
        heap = heapify(items)
        out = []
        for _ in range(k):
            _, word = heappop(items)
            out.append(word)
        return out
