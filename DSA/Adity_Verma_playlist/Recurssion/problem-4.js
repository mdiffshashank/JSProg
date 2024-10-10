/***
 * Problem-4: calculate the height of a tree
 * Approach :recurrsion
 *              Hypothesis, induction, base condition
 * Hypothesis height(node) -> number
 * Induction :apply logic for smaller input
 * base condition : think of smallest possible input
 */

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
d.left = e;
d.right = f;

/****
 * calculate the height of a tree
 *
 *            a
 *           / \
 *          b   c
 *         /
 *        d
 *       / \
 *      e   f
 *     /     \
 *    null    null
 */

function height(node) {
  if (node === null) return 0;
  const left = height(node.left);
  const right = height(node.right);
  return Math.max(left, right) + 1;
}

console.log(height(a));
