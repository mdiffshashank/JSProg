/**
 * Find the Nearest greater element to right, if no greater add -1
 * https://www.geeksforgeeks.org/next-greater-element/
 * https://www.youtube.com/watch?v=NXOOYYwpbg4&list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd&index=2
 * INPUT : [1,3,2,4]
 * OUTPUT: [3,4,4,-1]
 *
 * Program :1
 */

// TIP : stack will be used and don't forget to reverese the output, start loop from last
function NGR(arr) {
  //create one temp stack and output array .
  const stack = [];
  const output = [];

  //reverse loop
  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      output.push(-1); // insert -1 in output if length 0
      stack.push(arr[i]);
    } else if (stack.length > 0) {
      //pop from stack until get greater value
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

  return output.reverse();
}

const result = NGR([1, 3, 2, 4]);
console.log(result);
