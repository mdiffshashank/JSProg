/**
 * Find the next smallest element of Array , if no smallest add -1
 * https://www.geeksforgeeks.org/next-greater-element/
 * https://www.youtube.com/watch?v=NXOOYYwpbg4&list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd&index=2
 * INPUT : [1,3,2,4]
 * OUTPUT: [-1,2,-1,-1]
 *
 * Program :4 just change the sign in while loop from greater than to smaller than (program -1)
 */

function NSR(arr) {
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
      while (stack[stack.length - 1] >= arr[i] && stack.length > 0) {
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

const result = NSR([1, 3, 2, 4]);
console.log(result);
