var removeElement = function (nums, val) {
  let l1 = 0,
    l2 = 0;

  while (l1 < nums.length) {
    if (nums[l1] !== val) {
      nums[l2] = nums[l1];
      l2++;
    }
    l1++;
  }

  while (l2 < nums.length) {
    nums[l2] = "_";
    l2++;
  }
  console.log(nums);
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
