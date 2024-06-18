class Solution:
    def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
        # Sort Profit, difficulty by highest profit
        profit_diff = sorted(zip(profit, difficulty), reverse=True)
        # Sort workers by huighest ability
        worker.sort(reverse=True)
        # Start total
        total = 0
        # For w in worker, advance difficulty until possible. 
        job_i = 0
        for w in worker:
            while job_i < len(profit_diff) and profit_diff[job_i][1] > w:
                job_i+=1
            if job_i >= len(profit_diff):
                break
            total += profit_diff[job_i][0]
        return total