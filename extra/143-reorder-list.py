# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        tail = None
        curr = head
        arr = []
        while curr:
            new = curr.next
            curr.next = None
            arr.append(curr)
            curr = new
        reordered = head
        reordered.next = None
        l = 1
        r = len(arr) - 1
        left_turn = False
        while l <= r:
            if left_turn:
                reordered.next = arr[l]
                reordered = reordered.next
                l += 1
                left_turn = False
            else:
                reordered.next = arr[r]
                reordered = reordered.next
                r -= 1
                left_turn = True

        return head
