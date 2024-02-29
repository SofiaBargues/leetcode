/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let curr = head // 1
    let prev = null

    while(curr){
        const next = curr.next // 2
        curr.next = prev // null
        prev = curr // 1
        curr = next // 2
    }
    return prev
};


function reverseListDfs(head: ListNode | null): ListNode | null {

    // Recursion
    return reverseNodesDfs(head, null)
};

function reverseNodesDfs(curr, prev) {
 //  base case
 if (!curr){
     return prev
 }

 let next = curr.next
 curr.next = prev
 
 return reverseNodesDfs(next, curr)
}