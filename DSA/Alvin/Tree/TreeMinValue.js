class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(9);
const d = new Node(8);
const e = new Node(2);
const f = new Node(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function treeMinValue(root){
    if(root===null) return "tree is empty";
    const stack = [root];
    let min = root.val;
    while(stack.length>0){
        const current = stack.pop();
        min = Math.min(min,current.val);
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);

    }
    return min;
}
console.log(treeMinValue(a));


