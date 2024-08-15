class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

//pgm-1
function reverse(head) {
  let current = head;
  let previous = null;

  while (current !== null) {
    next = current.next; // store the value in temp
    current.next = previous;
    previous = current; //change the pointer
    current = next;
  }
  return previous;
}

console.log(reverse(a));
