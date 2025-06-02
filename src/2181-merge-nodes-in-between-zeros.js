

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
var mergeNodes = function (head) {
    let arr = []
    let curr = head
    let sum = 0
    // go thougth linked list
    while (curr !== null) {
        if (curr.val === 0) {
            arr.push(sum)
            sum = 0
        } else sum += curr.val
        curr = curr.next
    }
    const headResult = new ListNode(arr[1], null)
    let currNodo = headResult
    for (let i = 2; i <= arr.length - 1; i++) {
        let newNode = new ListNode(arr[i], null)
        currNodo.next = newNode
        currNodo = currNodo.next
    }

    return headResult
};