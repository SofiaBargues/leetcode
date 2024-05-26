from bisect import bisect
from typing import List


class Solution:
    def fullBloomFlowers(
        self, flowers: List[List[int]], people: List[int]
    ) -> List[int]:
        # 1. answer = []
        # 2. create flowers_inc with flowers start in inc order
        # 3. create flowers_dec with flowers end+1 in inc order
        # 4. For people_time in people:
        #    a. binary search in flowers_inc. Count how many elements to the left
        #    b. binary search in flowers_inc with time Count how many elements to the left
        #    c. answer.append(flowers_inc count - flowers_dev count)
        # 5. return answer
        answer = []
        flowers_inc = sorted([start for start, end in flowers])
        flowers_dec = sorted([end + 1 for start, end in flowers])
        for time in people:
            inc_count = bisect(flowers_inc, time)
            dec_count = bisect(flowers_dec, time)
            answer.append(inc_count - dec_count)
        return answer
