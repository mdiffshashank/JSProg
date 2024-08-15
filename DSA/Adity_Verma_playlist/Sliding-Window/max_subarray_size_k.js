/**
 *  problem -1
 * Find the maximum sum of subbaray of size k;
 * INPUT : [2, 3, 5, 2, 9, 7, 1] , window size = 3
 * OUTPUT : 18;
 */

function maxSubaary(nums, size) {
  let left = 0,
    right = 0;
  let max = -Infinity;
  let sum = 0;

  while (right < nums.length) {
    if (right - left + 1 < size) {
      sum += nums[right];
      right++;
    } else {
      sum = sum + nums[right];
      max = Math.max(max, sum);
      right++;
      sum = sum - nums[left];
      left++;
    }
  }
  return max;
}

console.log(maxSubaary([2, 3, 5, 2, 9, 7, 1], 3));
