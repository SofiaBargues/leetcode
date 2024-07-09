class Solution:
    def averageWaitingTime(self, customers: List[List[int]]) -> float:
        totalWait = 0
        endTime = 0
        for arraivalTime, duration in customers:
            startTime = max(arraivalTime, endTime)
            endTime = startTime + duration
            totalWait += endTime-arraivalTime
        return totalWait/len(customers)