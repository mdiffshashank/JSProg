/**
 * Problem 4
 *find the max of subarray of size k
 * INPTUT : nums = [1, 3, -1, -3, 5, 3, 6, 7] , k=3
 * OUTPUT : [ 3, 3, 5, 5, 6, 7 ]
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 *
 * TIP : it uses a stack
 * some condition  before doing left ++;
 */

function maxOfSubarray(nums, k) {
  let left = 0,
    right = 0;

  const stack = [];
  const output = [];

  while (right < nums.length) {
    if (stack.length === 0) {
      stack.push(nums[right]);
    } else if (stack[stack.length - 1] < nums[right]) {
      stack.pop();
      stack.push(nums[right]);
    }
    if (right - left + 1 === k) {
      output.push(stack[stack.length - 1]);
      if (stack[stack.length - 1] === nums[left]) {
        stack.pop();
      }
      left++;
    }
    right++;
  }

  return output;
}

console.log(maxOfSubarray([1, 3, -1, -3, 5, 3, 6, 7], 3));
