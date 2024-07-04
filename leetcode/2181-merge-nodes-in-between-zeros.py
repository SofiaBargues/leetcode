# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        curr_in = head
        curr_out = head
        while curr_in:
            if curr_in.val == 0:
                # Remove current
                curr_out.next = curr_in.next
                curr_in = curr_in.next
                if curr_in and curr_in.next:
                    curr_in = curr_in.next
                curr_out = curr_out.next
            else:
                # Remove next
                curr_out.val += curr_in.val
                curr_in = curr_in.next


        return head.next

class SolutionSpaceN:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        curr_out = dummy
        curr_in = head
        while curr_in.next:
            if curr_in.val == 0:
                curr_out.next = ListNode()
                curr_out = curr_out.next
            else:
                curr_out.val += curr_in.val

            curr_in = curr_in.next

        return dummy