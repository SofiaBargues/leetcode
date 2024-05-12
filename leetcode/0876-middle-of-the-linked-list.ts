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

function middleNode(head: ListNode | null): ListNode | null {456
    let fast = head
    let slow = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
  };


function middleNodeComplex(head: ListNode | null): ListNode | null {
    if(!head){
        return head
    }
    
    let fast = head
    let slow = head
    while(fast.next && fast.next.next){
        fast = fast.next.next
        slow = slow.next
    } 
    if(fast.next){
        slow = slow.next
    }
  
    return slow
  };