# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:        
        idx = 1
        prev = head
        curr = head.next
        min_dist = float('inf')
        last = -1
        first = -1
        while curr.next:
            # Traverse linked list with prev   
            # At each node check 
            # if critical point
            if (prev.val > curr.val < curr.next.val) or (
                prev.val < curr.val > curr.next.val):
                # 1. fill first critical point if not found
                if first == -1:
                    first = idx
                    last = idx
                else:
                    # 2. min_dist = min(min_dist, idx-last)
                    min_dist = min(min_dist, idx-last)
                    # 3. Update last critical point
                    last = idx
            # Advance pointers 
            curr = curr.next
            prev = prev.next
            # Update idx
            idx+=1
        
        if first != -1 and last != first:
            max_dist = last - first
            return [min_dist, max_dist]
        else:
            return [-1, -1]