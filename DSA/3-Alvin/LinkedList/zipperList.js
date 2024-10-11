class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");

a.next = b;
b.next = c;

// A -> B -> C

const q = new Node("Q");
const r = new Node("R");
const s = new Node("S");

q.next = r;
r.next = s;

// Q -> R -> S

const zipperList = (head1, head2) => {
  let zipperListTail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      zipperListTail.next = current2;
      current2 = current2.next;
    } else {
      zipperListTail.next = current1;
      current1 = current1.next;
    }
    zipperListTail = zipperListTail.next
    count += 1;
  }

  if(current1!==null){
      zipperListTail.next = current1
  }
  if(current2!==null){
      zipperListTail.next = current2
  }
  return head1;
};

console.log(zipperList(a, q));
