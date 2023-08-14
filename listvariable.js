class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// Creating a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

// Storing a reference to the head in the current variable
let current = head;

// Reversing the linked list and storing the new head in copyCurrent variable
let copyCurrent = reverseLinkedList(current);

// Output the reversed list
while (copyCurrent !== null) {
  console.log("copied",copyCurrent.val);
  copyCurrent = copyCurrent.next;
}

// Output the original list using the 'current' variable
while (current !== null) {
  console.log("original",current.val);
  current = current.next;
}
