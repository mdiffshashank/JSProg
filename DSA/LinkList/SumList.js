class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(7);

a.next = b;
b.next = c;
c.next = d;

//PROGRAM-5: sum list
const sumList = (head) => {
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};

//time : O(n) ; n: number of nodes
//space : O(1) constant space for sum and current

// console.log(sumList(a));

//PROGRAM-6: sum list using recurrsion
const sumListR = (head, sum = 0) => {
  if (head === null) return sum;
  sum += head.val;
  return sumListR(head.next, sum);
};

// Another way of writing the recurrsive function
const sumListRR = (head) => {
  if (head === null) return 0;
  return head.val + sumListR(head.next);
};

console.log(sumListRR(a));

//time : O(n) ; n: number of nodes
//space : O(n) call stack space due to recurrsion
