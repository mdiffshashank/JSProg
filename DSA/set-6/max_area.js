var maxArea = function (height) {
  let maxArea = 0;
  let left = 0,
    right = height.length - 1;
  let area = 0;

  while (left < right) {
    area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(area, maxArea);
    if (height[right] < height[left]) {
      right--; // towords left
    } else {
      left++;
    }
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
