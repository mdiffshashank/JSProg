class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function createLinkList(arr) {
  let start = new Node("dummy");
  let current = start;
  for (el of arr) {
    current.next = new Node(el);
    current = current.next;
  }
  return start.next;
}

console.log(createLinkList([2, 4, 6, 8]));
