
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {

    let set = new Set(nums)

    while (set.has(head.val)) {
        head = head.next
    }
    let node = head
    if(!head) return null
    while (node && node.next != null) {
        if (set.has(node.next.val)) {
            node.next = node.next.next
        } else {
            node = node.next
        }

    }
    return head

};
