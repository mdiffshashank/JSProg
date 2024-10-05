var minSubArrayLen = function (target, nums) {
  let left = 0,
    right = 0;
  let currentSum = 0;
  let minLength = Infinity;

  while (right < nums.length) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
    right++;
  }

  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
