class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

function printLL(head, arr = []) {
  if (head === null) return arr;
  arr.push(head.val);
  return printLL(head.next, arr);
}

console.log(printLL(a));
