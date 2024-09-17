/**
 * Neerest greater to left
 * INPUT : [1,3,2,4]
 * OUTPUT: [-1,-1,3,-1]
 *  * Program :2
 */

function NGL(arr) {
  //create one temp stack and output array .
  const stack = [];
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      output.push(-1); // insert -1 in output if length 0
      stack.push(arr[i]);
    } else if (stack.length > 0) {
      while (stack[stack.length - 1] <= arr[i] && stack.length > 0) {
        stack.pop();
      }
      if (stack.length === 0) {
        output.push(-1);
        stack.push(arr[i]);
      } else {
        output.push(stack[stack.length - 1]);
        stack.push(arr[i]);
      }
    }
  }

  return output;
}

console.log(NGL([1, 3, 2, 4]));
