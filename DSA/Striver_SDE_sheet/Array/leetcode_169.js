//https://takeuforward.org/data-structure/find-the-majority-element-that-occurs-more-than-n-2-times/

var majorityElement = function (nums) {
  //step-1 : apply moore voting algo
  //step-2 : check if it is greater than n/2
  let element;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      element = nums[i];
      count = 1;
    } else if (nums[i] === element) {
      count++;
    } else {
      count--;
    }
  }

  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === element) {
      cnt++;
    }
  }
  if (cnt > nums.length / 2) {
    return element;
  }
  return -1;
};
