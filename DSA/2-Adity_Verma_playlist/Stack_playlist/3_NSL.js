/**
 * Find the nearest smallest to left, if not found add -1
 * INPUT : [1,3,2,4]
 * OUTPUT: [-1,1,1,2]
 * program :3
 */

// just change the while loop condition rest are same as NGL
function NSL(arr) {
  const output = [];
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      output.push(-1);
      stack.push(arr[i]);
    } else if (stack.length > 0) {
      //pop till you get the smaller element
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

  return output;
}

console.log(NSL([1, 3, 2, 4]));
console.log(NSL([4, 5, 2, 10, 8]));
