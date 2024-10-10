/**
 * Problem -2
 * https://www.geeksforgeeks.org/first-negative-integer-every-window-size-k/
 *
 * first negative of every woindow of size k
 * INPUT [-8, 2, 3, -6, 10], K=2
 * OUTPUT: [ -8, 0, -6, -6 ]
 */

function firstNegatives(nums, size) {
  let left = 0,
    right = 0;

  let queue = []; //temporary space
  const output = []; //result

  while (right < nums.length) {
    if (nums[right] < 0) {
      // add negative number in queue
      queue.push(nums[right]);
    }
    if (right - left + 1 === size) {
      //window size match
      if (queue.length === 0) {
        output.push(0); //edge case if queue is empty push 0
      } else {
        output.push(queue[0]); //else push first value
      }

      if (nums[left] < 0) {
        queue.shift(); // if left is negative removeit from queue also
      }
      left++;
    }

    right++; //right will increment without any condition
  }
  return output;
}

console.log(firstNegatives([-8, 2, 3, -6, 10], 2));
