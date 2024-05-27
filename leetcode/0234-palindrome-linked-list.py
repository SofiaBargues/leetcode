# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        # Find middle of linked list
        # while iterating to middle, keep elements in stack
        # compare from stack with the 2nd half of linked list (while popping)
        if not head:
            return True
        fast = head
        slow = head
        stack = []
        while fast and fast.next:
            stack.append(slow.val)
            fast = fast.next.next
            slow = slow.next
        # Odd palindromic lists
        if fast:
            slow = slow.next

        while stack:
            expected = stack.pop()
            if expected != slow.val:
                return False
            slow = slow.next

        return True
