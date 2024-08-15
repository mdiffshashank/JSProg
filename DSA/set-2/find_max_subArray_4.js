/**
 * https://leetcode.com/problems/maximum-subarray/description/
 * find the maximum subarray
 * INPUT : [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * OUTPUT: 6
 */

function maxSubArray(nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
