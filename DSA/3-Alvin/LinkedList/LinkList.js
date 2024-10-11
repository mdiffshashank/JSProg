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

// A->B->C->D->null

//PROGRAM-1 : traverse a linked list
const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

//PROGRAM-2 : traverse a linked list with recurrsion
const printWithRecurrsion = (head) => {
  if (head === null) return; //base case for recursion
  console.log(head.val);
  printWithRecurrsion(head.next);
};

//PROGRAM-3 : get linklist values in array with recurrsion
const getLinkedListValues = (head, arr = []) => {
  if (head === null) return arr;
  arr.push(head.val);
  return getLinkedListValues(head.next, arr);
};

//PROGRAM-4 : Get link list values in array
const getLinkedListNodes = (head) => {
  let current = head;
  let arr = [];
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
};

//PROGRAM-7: find a target value in linkList
const findInLinkedList = (head, targetValue) => {
  let current = head;
  while (current !== null) {
    if (current.val === targetValue) return true;
    current = current.next;
  }
  return false;
};

//PROGRAM-8 FIND A TARGET VALUE USING RECURRSION
const findInLinkedListR = (head, targetValue) => {
  if (head === null) return false;
  if (head.val === targetValue) return true;
  return findInLinkedListR(head.next, targetValue);
};

//PROGRAM-9 find the node at given index return value of the node
const findByIndex = (head, index) => {
  let current = head;
  let currentIndex = 0;

  while (current.next !== null) {
    if (currentIndex === index) return current.val;
    currentIndex++;
    current = current.next;
  }
  return null;
};

//PROGRAM-10 find the node at given index return value of 
// the node using recurrsion
const findByIndexR = (head, index, count = 0) => {
  if (head === null) return null;
  if (count === index) return head.val;
  count += 1;
  return findByIndexR(head.next, index, count);
};

//another recurrsive approach 
const findByIndexRR = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  index -= 1;
  return findByIndexR(head.next, index);
};

//Program-11 Reverse a list A -> B -> C -> D
// output  D -> C -> B -> A

const reverseList = (head) => {
  let current = head;
  let previous = null;

  while (current !== null) {
    const next = current.next; //save before loosing track
    current.next = previous; //change direction to previous
    previous = current; //move 1 to right
    current = next; //move forword
  }
  return previous;
};

const reverseListR = (head, prev = null) => {
  if (head === null) return prev; //prev is the new head
  const next = head.next;
  head.next=prev;
  return reverseListR(next, head); //head is new prev
};


//prev -> head -> current

//printLinkedList(a);
//printWithRecurrsion(a);
//console.log(getLinkedListValues(a));
//console.log(getLinkedListNodes(a));

// A -> B -> C -> D -> null
//              curr

// console.log(findInLinkedList(a,"C"));
// console.log(findInLinkedListR(a,"C"));
// console.log(findByIndex(a,2)); //time O(n) space : O(1)
// console.log(findByIndexRR(a, 3)); //time O(n) space : O(n)

console.log(reverseListR(a));
