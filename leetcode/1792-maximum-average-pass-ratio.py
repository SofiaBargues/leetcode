import heapq

class Solution:
    def maxAverageRatio(self, classes: List[List[int]], extraStudents: int) -> float:
        def profit(pass_count, total):
            return ((pass_count+1)/ ( total+1)) - (pass_count/ total)

        heap = [(-profit(pass_count, total), pass_count, total) for pass_count, total in classes]
        heapq.heapify(heap)

        # Apply extra students to max profit
        for i in range(extraStudents):
            _, pass_count, total = heapq.heappop(heap)
            heapq.heappush(heap, (-profit(pass_count+1, total+1), pass_count+1, total+1))
       

        # Calculate the average of averages
        average = 0
        for _, passed, total in heap:
            average+= (passed/total)/len(classes)
        return average