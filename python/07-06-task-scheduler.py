from collections import defaultdict, Counter
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        counter = defaultdict(lambda:0)

        for task in tasks:
            counter[task]+=1

        max_freq = max(counter.values())

        max_freq_count = len([val for val in counter.values() if val == max_freq])

        return max(
            len(tasks),
            (max_freq-1)*(n+1) + max_freq_count
        )
