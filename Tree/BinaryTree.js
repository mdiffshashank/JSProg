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
//DFS: In DFS we go in depth first then we go across DFS uses a stack

const defthFirstTravarsal = (root) => {
  if (root === null) return [];
  const stack = [root];
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
