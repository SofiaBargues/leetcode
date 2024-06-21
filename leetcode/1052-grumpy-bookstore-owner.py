class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        non_grumpy = 0
        window = 0
        max_grumpy = window
        l = 0
        for i in range(len(customers)):
            c, g = customers[i], grumpy[i]
            if not g:
                non_grumpy+=c
            if g:
                window+=c
            if i >= minutes:
                if grumpy[l]:
                    window-=customers[l]
                l+=1
            max_grumpy = max(window, max_grumpy)
        
        return non_grumpy + max_grumpy

class SolutionCleaner:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        non_grumpy = 0
        for c, g in zip(customers, grumpy):
            if not g:
                non_grumpy+=c
        window = 0
        for c, g in zip(customers[:minutes], grumpy[:minutes]):
            if g:
                window+=c
        l = 0
        max_grumpy = window
        for c, g in zip(customers[minutes:], grumpy[minutes:]):
            if g:
                window+=c
            if grumpy[l]:
                window-=customers[l]
            max_grumpy = max(window, max_grumpy)
            l+=1
        
        return non_grumpy + max_grumpy