/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let curr = head

    while (curr != null) {
        let next = curr.next

        if (next && next.val === curr.val) {
            curr.next = curr.next.next
            curr = curr
        } else {
            curr = curr.next
        }
    }


    return head
};