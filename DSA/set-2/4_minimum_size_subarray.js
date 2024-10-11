/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/description/
 *
 * Given an array of positive integers nums and a positive integer target,
 * return the minimal length of a  subarray whose sum is greater than or equal
 * to target. If there is no such subarray, return 0 instead.
 *
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 *
 * TIP : sliding window technique
 *
 */

function minSubArrayLen(target, nums) {
  let minLength = Infinity;
  let currentSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2 (subarray [4,3])
console.log(minSubArrayLen(4, [1, 4, 4])); // Output: 1 (subarray [4])
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // Output: 0 (no subarray)
