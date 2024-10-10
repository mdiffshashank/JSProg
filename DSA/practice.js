class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const A = new ListNode(1);
const B = new ListNode(3);
const C = new ListNode(4);
const D = new ListNode(7);
const E = new ListNode(1);
const F = new ListNode(2);
const G = new ListNode(6);

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;
F.next = G;

var deleteMiddle = function (head) {
  if (head === null) return null;

  let dummy = new ListNode();

  let tail = dummy;

  let slow = head;
  let fast = head;

  while (fast.next !== null) {
    fast = fast.next.next;
    tail.next = slow;
    slow = slow.next;
  }

  tail.next = slow.next;

  return dummy.next;
};

console.dir(deleteMiddle(A));
