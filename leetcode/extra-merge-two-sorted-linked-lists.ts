/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
  if (!head1) {
    return head2;
  } else if (!head2) {
    return head1;
  }

  let head = null;
  if (head1.data <= head2.data) {
    head = head1;
    head.next = mergeLists(head1.next, head2);
  } else {
    head = head2;
    head.next = mergeLists(head1, head2.next);
  }

  return head;
}
