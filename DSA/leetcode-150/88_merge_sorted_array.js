var merge = function (nums1, m, nums2, n) {
  //start from last
  let l1 = m - 1,
    l2 = n - 1;
  let l = m + n - 1; //last index of combined array

  while (l1 >= 0 && l2 >= 0) {
    if (nums1[l1] > nums2[l2]) {
      nums1[l] = nums1[l1];
      l1--;
    } else {
      nums1[l] = nums2[l2];
      l2--;
    }
    l--;
  }
  while (l2 >= 0) {
    nums1[l] = nums2[l2];
    l2--;
    l--;
  }
  while (l1 >= 0) {
    nums1[l] = nums1[l1];
    l1--;
    l--;
  }
  console.log(nums1);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
