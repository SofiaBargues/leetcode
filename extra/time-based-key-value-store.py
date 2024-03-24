from typing import Dict, List
from collections import defaultdict
from bisect import bisect

class TimeMap:

    def __init__(self):
        # Create a dataclase for the list later
        self.store_times: Dict[str, List[int] ] = defaultdict(list)
        self.store_values: Dict[str, List[str] ] = defaultdict(list)


    def set(self, key: str, value: str, timestamp: int) -> None:
        self.store_times[key].append(timestamp)
        self.store_values[key].append(value)

    def get(self, key: str, timestamp: int) -> str:
        #  [1, 3, 5] : 4 -> 3 (1) bisect_left -1
        closest_timestamp = bisect(self.store_times[key], timestamp)
        if closest_timestamp >= 1:
            return self.store_values[key][closest_timestamp-1]
        return ''
