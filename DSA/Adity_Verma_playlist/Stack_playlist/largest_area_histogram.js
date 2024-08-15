/**
 * https://leetcode.com/problems/largest-rectangle-in-histogram/description/
 * steps
 *  - find NSL array
 * - find NSR array
 * - find width array
 * - find area array
 * - OUTPUT : max of area array
 *
 *           __
 *        __|  |
 *       |  |  |
 *       |  |  |   __
 *  __   |  |  |__|  |
 * |  |__|  |  |  |  |
 * |2 |1 |5 |6 |2 |3 |
 * ______________________________
 *
 */

function largestAreaHistogram(heights) {
  //find NSR
  const NSR = [];
  const NSL = [];
  const WIDTH = [];
  const AREA = [];

  const stack = [];

  for (let i = heights.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      NSR.push(i + 1); //insert index
      stack.push([i + 1, 0]); //insert (index,element)
      stack.push([i, heights[i]]);
    } else {
      while (stack[stack.length - 1]?.[1] >= heights[i] && stack.length > 0) {
        stack.pop();
      }
      if (stack.length === 0) {
        NSR.push(i);
        stack.push([i, heights[i]]);
      } else {
        NSR.push(stack[stack.length - 1][0]); // push index
        stack.push([i, heights[i]]);
      }
    }
  }

  console.log("NSR", NSR.reverse());

  //re-initialize
  stack.length = 0;

  for (let i = 0; i < heights.length; i++) {
    if (stack.length === 0) {
      NSL.push(-1);
      stack.push([-1, 0]); // (index,element)
      stack.push([i, heights[i]]);
    } else {
      while (stack[stack.length - 1][1] >= heights[i] && stack.length > 0) {
        stack.pop();
      }
      if (stack.length === 0) {
        NSL.push(i);
        stack.push([i, heights[i]]); // (index,element)
      } else {
        NSL.push(stack[stack.length - 1][0]); //insert only index
        stack.push([i, heights[i]]); // (index,element)
      }
    }
  }

  console.log("NSL", NSL);

  for (let i = 0; i < heights.length; i++) {
    WIDTH[i] = NSR[i] - NSL[i] - 1;
    AREA[i] = heights[i] * WIDTH[i];
  }

  console.log("width", WIDTH);
  console.log("AREA", AREA);

  return Math.max(...AREA);
}

const result = largestAreaHistogram([2, 1, 5, 6, 2, 3]);
//const result = largestAreaHistogram([2, 4]);
console.log(result);
