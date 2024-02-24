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

function hasCycle(head: ListNode | null): boolean {
    if(!head){return false}
    const seen = []
    let curr = head
    seen.push(curr)
    // O(N)
    while(curr.next){
        curr = curr.next
        // O(N)
        if(seen.includes(curr)){
            return true
        }
        seen.push(curr)
    }
    return false
};


function hasCycle2(head: ListNode | null): boolean {
    let slow = head
    let fast = head?.next
    while(slow && fast){
        if(slow == fast){return true}
        slow = slow.next
        fast = fast?.next?.next
    }
    return false
};