"""

in: [1,1,1,2,2,2]
to: [1,2,1,2,1,2]
Count freq
start from highest freq
Priority queue to store highest freq first

"""

from collections import Counter
from heapq import heappush, heappop


class Solution:
    def rearrangeBarcodes(self, barcodes: List[int]) -> List[int]:
        num_freq = Counter(barcodes)
        heap = []
        for num, freq in num_freq.items():
            heappush(heap, (-num_freq[num], num))
        out = []

        while heap:
            count_inv_1, num_1 = heappop(heap)
            if not out or out[-1] != num_1:
                out.append(num_1)
            else:
                count_inv_2, num_2 = heappop(heap)
                out.append(num_2)
                out.append(num_1)
                if count_inv_2 < -1:
                    heapq.heappush(heap, (count_inv_2 + 1, num_2))
            if count_inv_1 < -1:
                heapq.heappush(heap, (count_inv_1 + 1, num_1))
        return out
