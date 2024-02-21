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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let currentNode: ListNode = new ListNode(0); //Start with a dummy node
    let headNode: ListNode = currentNode;
    while(list1 && list2){
        if(list1.val < list2.val){
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }
        currentNode = currentNode.next;
    }

    const remainder = list1 || list2
    currentNode.next = remainder
    return headNode.next; // Return first after dummy node
};



function mergeTwoListsRecursive(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // Each time it is called, it will return the node with the smallest value
    // Base case
    if(!list1) return list2;
    if(!list2) return list1;
    // Pre-recursion
    let node = list1.val < list2.val? list1 : list2;
    // Recursion
    if(list1.val < list2.val) node.next = mergeTwoListsRecursive(list1.next, list2)
    else node.next = mergeTwoListsRecursive(list1, list2.next);
    // Post recursion
    return node;
};