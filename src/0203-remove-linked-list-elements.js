/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) return null

    while (head.val === val) {
        if (head.next === null) return null
        head = head.next

    }
    let curr = head
    let next = head.next
    while (curr && next) {
        if (next.val === val) {
            curr.next = next.next
        } else {
            curr = curr.next
        }
        if (curr === null) return head
        next = curr.next
    }
    return head
};