# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from collections import defaultdict


# There is a  Time: O(nlogn) Space: O(n) solution but its too complex
class SolutionMergeSort:
    # Time: O(nlogn) Space: O(logn)

    def getMid(self, head: ListNode):
        slow = fast = head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        # TODO: check OFf by 1?
        return slow

    def merge(self, left, right):
        dummy = tail = ListNode()
        while left and right:
            if left.val < right.val:
                tail.next = left
                left = left.next
            else:
                tail.next = right
                right = right.next
            tail = tail.next

        if left:
            tail.next = left
        if right:
            tail.next = right
        return dummy.next

    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        mid = self.getMid(head)
        right = mid.next
        # Split lists
        mid.next = None

        left = self.sortList(head)
        right = self.sortList(right)

        head = self.merge(left, right)
        return head


class SolutionNonOptimal:
    # Time: O(nlogn) Space: O(n)
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        node = head
        val_node = defaultdict(list)
        while node:
            val_node[node.val].append(node)
            node = node.next
        sorted_vals = sorted(val_node.keys())
        # Rebuild the linked list
        new_head = ListNode(-1)
        node = new_head
        for val in sorted_vals:
            for _node in val_node[val]:
                node.next = _node
                node = node.next
        node.next = None
        return new_head.next
