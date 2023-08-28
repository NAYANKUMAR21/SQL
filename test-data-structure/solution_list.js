class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseAndCloneLinkedList(head) {
  let prev = null;
  let current = head;
  let reversedHead = null;

  while (current !== null) {
    const newNode = new ListNode(current.val);
    newNode.next = reversedHead;
    reversedHead = newNode;
    current = current.next;
  }

  return reversedHead;
}

// Creating a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

// Storing a reference to the head in the 'current' variable
let current = head;

// Creating a reversed copy of the linked list and storing the new head in 'reversedHead' variable
let reversedHead = reverseAndCloneLinkedList(current);

// Output the reversed list
while (reversedHead !== null) {
  console.log('revresed', reversedHead.val);
  reversedHead = reversedHead.next;
}

// Output the original list using the 'current' variable
while (current !== null) {
  console.log('original', current.val);
  current = current.next;
}
