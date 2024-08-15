class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(10);
const b = new Node(20);
const c = new Node(30);
const d = new Node(40);

a.next = b;
b.next = c;
c.next = d;

function insert_start(a,num) {
    let n = new Node(num);
    n.next = a;
    return n;
}

console.log(insert_start(a, 6));
