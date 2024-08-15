class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/***
 *           a
 *         /  \
 *        b    c
 *      /  \    \
 *    d     e    f
 *
 */

//Program-1 DFS (Depth first traversal)

//DFS: In DFS we go in depth first, then we go across. DFS uses a stack
const defthFirstTravarsal = (root) => {
  if (root === null) return [];
  const stack = [root]; //DFS Uses stack
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

console.log(defthFirstTravarsal(a));

// Program-2 DFS using Recurssion.check using the tree
const dfsR = (root) => {
  if (root === null) return [];
  const leftValues = dfsR(root.left);
  const rightValues = dfsR(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

//Program -3 BFS Values problem. BFS uses a queue.
const bfs = (root) => {
  if (root === null) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);
    if (current.left !== null) queue.push(current.left); // if you push right node first you will get different order
    if (current.right !== null) queue.push(current.right);
  }
  return result;
};



//Program -5 tree includes problem
const isTargetPresent = (root, target) => {
  if (root === null) return false;
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val === target) return true;
    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }
  return false;
};

//console.log(isTargetPresent(a, "e"));

// console.log(bfs(a));
