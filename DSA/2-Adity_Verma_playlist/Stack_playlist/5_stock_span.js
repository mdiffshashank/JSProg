/**
 * program 4
 * https://www.geeksforgeeks.org/the-stock-span-problem/
 * Consicutive smaller or equal before it. === NGL instead of returnning the element
 * we need to return the self index - NGL index
 *
 * save NGL as well as index in stack
 */

function stockSpan(arr) {
  //create one temp stack and output array .
  const stack = [];
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      output.push(1); // insert -1 in output if length 0
      stack.push([i, arr[i]]); // insert (index,element)
    } else if (stack.length > 0) {
      while (stack[stack.length - 1][1] <= arr[i] && stack.length > 0) {
        stack.pop();
      }
      if (stack.length === 0) {
        output.push(1);
        stack.push([i, arr[i]]);
      } else {
        output.push(i - stack[stack.length - 1][0]); // just change this in NGR
        stack.push([i, arr[i]]);
      }
    }
  }

  return output;
}

console.log(stockSpan([100, 80, 60, 70, 60, 75, 85]));
