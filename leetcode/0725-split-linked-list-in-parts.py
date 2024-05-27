# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def splitListToParts(
        self, head: Optional[ListNode], k: int
    ) -> List[Optional[ListNode]]:
        l = 0
        curr = head
        while curr:
            curr = curr.next
            l += 1
        splitted = []
        curr = head
        div, mod = divmod(l, k)
        for i in range(k):
            splitted.append(curr)
            correction = 1 if i < mod else 0
            moves = div + correction
            for j in range(moves):
                prev = curr
                curr = curr.next
                if j == moves - 1:
                    # Unlink
                    prev.next = None

        return splitted
