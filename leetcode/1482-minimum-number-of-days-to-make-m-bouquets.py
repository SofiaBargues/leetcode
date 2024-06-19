class Solution:
    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        l, r = 1, 1000000000
        ans = -1
        while l <= r:
            mid = l + (r - l) // 2
            consecutive_length, bouquets = 0, 0
            for bloom in bloomDay:
                if bloom <= mid:
                    consecutive_length += 1
                    if consecutive_length >= k:
                        consecutive_length = 0
                        bouquets += 1
                else:
                    consecutive_length = 0
            if bouquets >= m:
                ans = mid
                r = mid - 1
            else:
                l = mid + 1
        return ans


class SolutionMemoryN:
    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        n = len(bloomDay)
        if m*k > n:
            return -1

        def bouquetesAtDay(day: int):
            bouquetes = 0
            adjCount = 0
            for flowerDay in bloomDay:
                if flowerDay <= day:
                    adjCount+=1
                    if adjCount == k:
                        bouquetes+=1
                        adjCount = 0
                else:
                    adjCount=0
            return bouquetes

        days = sorted(list(set(bloomDay)))
        
        # Binary search the firsth thats >= m
        l = 0
        r = len(days)-1
        while l<=r: 
            mid = (l+r)//2
            bouquets = bouquetesAtDay(days[mid])
            if bouquets < m:
                l = mid+1
            else:
                r = mid-1

        return days[l]