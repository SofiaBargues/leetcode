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


// 1 2 3
function reverseList(head: ListNode | null): ListNode | null {
    let curr = head // Curr is head
    let prev = null

    while(curr){
        const next = curr.next // Save next
        curr.next = prev // Point curr link to prev (reverse)
        prev = curr // Advance prev
        curr = next // Advance curr (with saved next)
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