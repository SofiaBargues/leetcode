/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    curr = new ListNode()
    let tmp = curr
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val){
            curr.next = list1
            curr = curr.next
            list1 = list1.next
        } else {
            curr.next = list2
            curr = curr.next
            list2 = list2.next
        }
    }
    if (list1 === null) {
        curr.next = list2
    } else {
        curr.next = list1
    }
    return tmp.next
};