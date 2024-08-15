/**
 * find maximum sum of subarray of size k
 * INPUT : [-1,2,3,3,4,5,-1] , k=4
 * OUTPUT: 15
 * Problem-1;
 */

function maxSum(nums, k) {
  let l = 0,
    r = l + k - 1;
  let maxSum = -Infinity;
  let sum = 0;

  while (r < nums.length) {
    sum = sum + nums[r];
    maxSum = Math.max(sum, maxSum);
    sum = sum - nums[l];
    r++;
    l++;
  }

  return maxSum;
}

console.log(maxSum([-1, 2, 3, 3, 4, 5, -1], 4));
