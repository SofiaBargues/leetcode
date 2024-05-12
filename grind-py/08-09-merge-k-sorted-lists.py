# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

import heapq
from collections import defaultdict

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        valsToHead = defaultdict(list)

        headVals = []
        for head in lists:
            if(head):
                valsToHead[head.val].append(head)
                headVals.append(head.val)

        heapq.heapify(headVals)

        mergedHead = ListNode(-1)
        mergedNode = mergedHead
        while len(headVals):
            val = heapq.heappop(headVals)
            head = valsToHead[val].pop()
            if head:
                mergedNode.next = head
                mergedNode = mergedNode.next
                nextHead = head.next
                if nextHead:
                    heapq.heappush(headVals, nextHead.val)
                    valsToHead[nextHead.val].append(nextHead)

        return mergedHead.next