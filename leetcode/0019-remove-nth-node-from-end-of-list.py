# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        temp = ListNode()
        temp.next = head
        node1 = temp
        node2 = temp
        for _ in range(n):
            node1 = node1.next

        while node1.next:
            node1 = node1.next
            node2 = node2.next

        # REmove second

        node2.next = node2.next.next

        return temp.next
