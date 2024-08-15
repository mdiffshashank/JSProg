class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

const x = new Node(1);
const y = new Node(3);
const z = new Node(4);

a.next = b;
b.next = c;

x.next = y;
y.next = z;

/**
 * 
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. 
The list should be made by splicing together the nodes of the first two lists.
 */

var mergeTwoLists = function (list1, list2) {
  let current1 = list1;
  let current2 = list2;

  let dummy = new Node("output");
  let tail = dummy; //dummy node

  while (current1 && current2) {
    if (current1.val <= current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }
  if (current1 !== null) {
    tail.next = current1;
  }
  if (current2 !== null) {
    tail.next = current2;
  }

  return dummy.next;
};

console.log(mergeTwoLists(a, x));

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
