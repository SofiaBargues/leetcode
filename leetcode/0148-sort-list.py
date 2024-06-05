# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from collections import defaultdict


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
